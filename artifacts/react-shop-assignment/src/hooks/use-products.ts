import { useCallback, useEffect, useState } from 'react';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const fetchProducts = useCallback(async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) throw new Error('The market is taking a break.');
      setProducts(await response.json() as Product[]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not reach the market right now.');
    } finally { setIsLoading(false); }
  }, []);
  useEffect(() => { void fetchProducts(); }, [fetchProducts]);
  return { products, isLoading, error, retry: fetchProducts };
}