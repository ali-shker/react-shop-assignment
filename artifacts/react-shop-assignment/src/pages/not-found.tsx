import { ArrowLeft, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex min-h-[60dvh] w-full items-center justify-center py-20">
      <div className="max-w-md text-center">
        <Compass className="mx-auto text-[hsl(var(--accent))]" size={38} />
        <p className="mt-6 font-mono text-[.7rem] uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">A little off the map</p>
        <h1 className="mt-3 font-display text-5xl text-[hsl(var(--primary))]">That shelf is empty.</h1>
        <p className="mt-4 text-sm leading-6 text-[hsl(var(--muted-foreground))]">This page wandered away. Let’s get you back to the good stuff.</p>
        <Link to="/products" data-testid="link-not-found-products" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-5 py-3 text-sm font-semibold text-[hsl(var(--primary-foreground))] no-underline"><ArrowLeft size={16} /> Back to the shelves</Link>
      </div>
    </div>
  );
}
