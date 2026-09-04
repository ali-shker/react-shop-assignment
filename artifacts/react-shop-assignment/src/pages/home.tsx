import { ArrowRight, Leaf, PackageCheck, Quote, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProducts } from '@/hooks/use-products';
import { ApiError } from '@/components/data-states';
import { PageEyebrow } from '@/components/site-layout';
import { ProductGrid, ProductSkeleton } from '@/components/product-card';

export default function Home() {
  const { products, isLoading, error, retry } = useProducts();
  return <div className="pb-4">
    <section className="relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-16 lg:py-24">
      <div className="reveal">
        <PageEyebrow>Small finds, thoughtfully gathered</PageEyebrow>
        <h1 className="mt-5 max-w-3xl font-display text-[clamp(3.8rem,9vw,8.6rem)] leading-[.86] tracking-[-.065em] text-[hsl(var(--primary))]">Good things<br /><em className="text-[hsl(var(--accent))]">take space.</em></h1>
        <p className="mt-8 max-w-md text-[1.05rem] leading-7 text-[hsl(var(--muted-foreground))]">Luma is a weekend market for the things that make an ordinary day feel considered. No endless scrolling. Just a few worth-keeping finds.</p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link to="/products" data-testid="link-hero-browse" className="group flex items-center gap-3 rounded-full bg-[hsl(var(--primary))] px-6 py-3.5 text-sm font-semibold text-[hsl(var(--primary-foreground))] no-underline transition-transform hover:-translate-y-1">Shop the shelves <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></Link>
          <span className="font-mono text-[.66rem] uppercase tracking-[.15em] text-[hsl(var(--muted-foreground))]">Curated in small batches</span>
        </div>
      </div>
      <div className="reveal delay-1 relative min-h-[410px] overflow-hidden rounded-[2rem] bg-[hsl(var(--primary))] p-7 text-[hsl(var(--primary-foreground))] sm:min-h-[500px]">
        <div className="absolute -right-14 -top-16 h-64 w-64 rounded-full border-[1px] border-[hsl(var(--accent)/.65)]" />
        <div className="absolute -right-4 -top-6 h-40 w-40 rounded-full border-[1px] border-[hsl(var(--accent)/.4)]" />
        <span className="font-mono text-[.64rem] uppercase tracking-[.16em] text-[hsl(var(--accent))]">Issue no. 04 / spring table</span>
        <div className="absolute bottom-8 left-7 right-7">
          <Sparkles size={25} className="mb-8 text-[hsl(var(--accent))]" />
          <p className="max-w-sm font-display text-4xl leading-[.95] sm:text-5xl">Useful can be beautiful. Beautiful can be useful.</p>
          <div className="mt-8 flex items-end justify-between border-t border-[hsl(var(--primary-foreground)/.2)] pt-4 font-mono text-[.62rem] uppercase tracking-[.13em] text-[hsl(var(--primary-foreground)/.65)]"><span>Est. in the browser</span><span>01—04</span></div>
        </div>
      </div>
    </section>
    <section className="grid gap-4 border-y border-[hsl(var(--border))] py-6 text-sm sm:grid-cols-3">
      <div className="flex items-center gap-3"><Leaf size={18} className="text-[hsl(var(--accent))]" /><span><strong>Less, better</strong> — a considered edit</span></div>
      <div className="flex items-center gap-3"><PackageCheck size={18} className="text-[hsl(var(--accent))]" /><span><strong>Easy to love</strong> — clear, useful things</span></div>
      <div className="flex items-center gap-3"><Quote size={18} className="text-[hsl(var(--accent))]" /><span><strong>Room to browse</strong> — no hurry here</span></div>
    </section>
    <section className="py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div><PageEyebrow>From the current edit</PageEyebrow><h2 className="mt-3 font-display text-4xl tracking-[-.04em] sm:text-5xl">The weekend table</h2></div>
        <Link to="/products" data-testid="link-featured-all" className="hidden items-center gap-2 text-sm font-semibold text-[hsl(var(--primary))] no-underline hover:text-[hsl(var(--accent))] sm:flex">See all finds <ArrowRight size={16} /></Link>
      </div>
      {isLoading ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"><ProductSkeleton /><ProductSkeleton /><ProductSkeleton /><ProductSkeleton /></div> : error ? <ApiError message={error} retry={retry} /> : <ProductGrid products={products.slice(0, 4)} featured />}
      <Link to="/products" data-testid="link-featured-mobile" className="mt-7 flex items-center justify-center gap-2 text-sm font-semibold text-[hsl(var(--primary))] no-underline sm:hidden">See all finds <ArrowRight size={16} /></Link>
    </section>
    <section className="grid gap-7 rounded-[1.8rem] bg-[hsl(var(--secondary))] p-7 sm:p-10 lg:grid-cols-[.7fr_1fr] lg:items-end">
      <PageEyebrow>Our point of view</PageEyebrow>
      <p className="font-display text-3xl leading-tight tracking-[-.035em] sm:text-5xl">“The best market stall is the one you remember on the walk home.”</p>
    </section>
  </div>;
}