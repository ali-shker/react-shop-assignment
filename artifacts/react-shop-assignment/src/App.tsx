import { type ReactNode } from 'react';
import { ErrorBoundary } from '@/components/error-boundary';
import { SiteLayout } from '@/components/site-layout';
import { CartProvider, cartStore } from '@/store/cart-redux';
import { Provider } from 'react-redux';
import Home from '@/pages/home';
import Products from '@/pages/products';
import Cart from '@/pages/cart';
import About from '@/pages/about';
import NotFound from '@/pages/not-found';
import { HashRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return <ErrorBoundary resetKey={pathname}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <Provider store={cartStore}>
      <CartProvider>
        <HashRouter>
          <SiteLayout><Router /></SiteLayout>
        </HashRouter>
      </CartProvider>
    </Provider>
  );
}

export default App;
