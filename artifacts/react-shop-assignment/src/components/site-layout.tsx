import { ArrowUpRight, ShoppingBag, Sparkles } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/store/cart-redux';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'The shelves' },
  { href: '/about', label: 'Our method' },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const { pathname: location } = useLocation();
  const { count } = useCart();
  return (
    <div className="site-shell grain">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <header className="flex min-h-[82px] items-center justify-between border-b border-[hsl(var(--border))]">
          <Link to="/" className="flex items-center gap-3 no-underline" data-testid="link-logo">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
              <Sparkles size={17} strokeWidth={2.4} />
            </span>
            <span className="font-display text-[1.55rem] font-semibold tracking-[-.04em]">luma<span className="text-[hsl(var(--accent))]">.</span></span>
          </Link>
          <nav aria-label="Primary navigation" className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} to={item.href} data-testid={`link-nav-${item.label.toLowerCase().replaceAll(' ', '-')}`} className={`relative py-2 text-[.78rem] font-semibold uppercase tracking-[.12em] no-underline transition-colors hover:text-[hsl(var(--accent))] ${location === item.href ? 'text-[hsl(var(--primary))]' : 'text-[hsl(var(--muted-foreground))]'}`}>
                {item.label}
                {location === item.href && <span className="absolute -bottom-[1px] left-0 h-[2px] w-full bg-[hsl(var(--accent))]" />}
              </Link>
            ))}
          </nav>
          <Link to="/cart" data-testid="link-cart" className="group flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-2.5 text-sm font-semibold no-underline transition-all hover:-translate-y-0.5 hover:border-[hsl(var(--primary))]">
            <ShoppingBag size={17} strokeWidth={1.8} />
            <span>Bag</span>
            <span className="grid min-w-5 place-items-center rounded-full bg-[hsl(var(--accent))] px-1.5 py-0.5 font-mono text-[.68rem] text-[hsl(var(--accent-foreground))]" data-testid="text-cart-count">{count}</span>
          </Link>
        </header>
        <div className="flex gap-5 overflow-x-auto border-b border-[hsl(var(--border))] py-3 md:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => <Link key={item.href} to={item.href} data-testid={`link-mobile-${item.label.toLowerCase().replaceAll(' ', '-')}`} className={`whitespace-nowrap text-xs font-semibold uppercase tracking-[.1em] no-underline ${location === item.href ? 'text-[hsl(var(--primary))]' : 'text-[hsl(var(--muted-foreground))]'}`}>{item.label}</Link>)}
        </div>
        <main>{children}</main>
        <footer className="mt-24 flex flex-col gap-5 border-t border-[hsl(var(--border))] py-8 text-sm text-[hsl(var(--muted-foreground))] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-lg text-[hsl(var(--foreground))]">A little less, but better.</p>
          <p className="font-mono text-[.68rem] uppercase tracking-[.12em]">Luma Market / student storefront / 2024</p>
          <Link to="/products" className="flex items-center gap-1 font-semibold text-[hsl(var(--primary))] no-underline hover:text-[hsl(var(--accent))]">Browse the shelves <ArrowUpRight size={15} /></Link>
        </footer>
      </div>
    </div>
  );
}

export function PageEyebrow({ children }: { children: ReactNode }) {
  return <p className="font-mono text-[.68rem] font-medium uppercase tracking-[.17em] text-[hsl(var(--accent))]">{children}</p>;
}