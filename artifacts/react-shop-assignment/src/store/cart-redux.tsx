import { createContext, useContext, type ReactNode } from 'react';
import { createStore } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import type { Product } from '@/hooks/use-products';

export type CartItem = Product & { quantity: number };
export type CartState = { items: CartItem[] };
export type CartAction =
  | { type: 'cart/add'; product: Product }
  | { type: 'cart/setQuantity'; id: number; quantity: number }
  | { type: 'cart/remove'; id: number }
  | { type: 'cart/clear' };

const emptyState: CartState = { items: [] };

export function cartReducer(state: CartState, action: CartAction): CartState {
  if (action.type === 'cart/add') {
    const found = state.items.find((item) => item.id === action.product.id);
    return found
      ? { items: state.items.map((item) => item.id === found.id ? { ...item, quantity: item.quantity + 1 } : item) }
      : { items: [...state.items, { ...action.product, quantity: 1 }] };
  }
  if (action.type === 'cart/setQuantity') {
    if (action.quantity <= 0) return { items: state.items.filter((item) => item.id !== action.id) };
    return { items: state.items.map((item) => item.id === action.id ? { ...item, quantity: action.quantity } : item) };
  }
  if (action.type === 'cart/remove') return { items: state.items.filter((item) => item.id !== action.id) };
  if (action.type === 'cart/clear') return emptyState;
  return state;
}

function getSavedCart(): CartState {
  try {
    return JSON.parse(localStorage.getItem('luma-cart') ?? '{"items":[]}') as CartState;
  }
  catch { return emptyState; }
}

// Redux store: one shared source of truth for every cart action in the app.
export const cartStore = createStore(cartReducer, getSavedCart());
cartStore.subscribe(() => {
  localStorage.setItem('luma-cart', JSON.stringify(cartStore.getState()));
});

type CartContextValue = { currency: string };
const CartContext = createContext<CartContextValue>({ currency: '$' });

export function CartProvider({ children }: { children: ReactNode }) {
  return (
    <CartContext.Provider value={{ currency: '$' }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const { currency } = useContext(CartContext);
  const items = useSelector((cart: CartState) => cart.items);
  const dispatch = useDispatch<typeof cartStore.dispatch>();
  return {
    items,
    count: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    currency,
    dispatch,
  };
}