import { Search, SlidersHorizontal, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useProducts } from '@/hooks/use-products';
import { ApiError, EmptyState } from '@/components/data-states';
import { PageEyebrow } from '@/components/site-layout';
import { ProductGrid, ProductSkeleton } from '@/components/product-card';

export default function Products() {
  const { products, isLoading, error, retry } = useProducts();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const categories = useMemo(() => ['all', ...Array.from(new Set(products.map((product) => product.category)))], [products]);
  const filtered = useMemo(() => products.filter((product) => {
    const matchesCategory = category === 'all' || product.category === category;
    const matchesQuery = `${product.title} ${product.description}`.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  }), [products, query, category]);
  return <div className="py-14 sm:py-20">
    <div className="reveal flex flex-col justify-between gap-8 border-b border-[hsl(var(--border))] pb-10 lg:flex-row lg:items-end">
      <div><PageEyebrow>Browse the complete edit</PageEyebrow><h1 className="mt-4 font-display text-[clamp(3.2rem,7vw,6.8rem)] leading-[.9] tracking-[-.06em] text-[hsl(var(--primary))]">The shelves<span className="text-[hsl(var(--accent))]">.</span></h1><p className="mt-5 max-w-md leading-7 text-[hsl(var(--muted-foreground))]">A small, changing collection pulled from the Fake Store API. Search by feeling, filter by corner.</p></div>
      <div className="font-mono text-[.68rem] uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]"><span className="text-[hsl(var(--primary))]">{products.length}</span> finds / one good scroll</div>
    </div>
    <div className="flex flex-col gap-3 py-7 lg:flex-row">
      <label className="relative flex-1"><span className="sr-only">Search products</span><Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))]" /><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the shelves..." data-testid="input-search-products" className="w-full rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] py-3.5 pl-11 pr-11 text-sm placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--primary))] focus:outline-none" />{query && <button type="button" onClick={() => setQuery('')} aria-label="Clear search" data-testid="button-clear-search" className="absolute right-4 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))]"><X size={16} /></button>}</label>
      <label className="relative flex items-center gap-3 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))] px-4 py-3.5 text-sm lg:w-72"><SlidersHorizontal size={16} className="text-[hsl(var(--accent))]" /><span className="sr-only">Filter by category</span><select value={category} onChange={(event) => setCategory(event.target.value)} data-testid="select-category-filter" className="w-full appearance-none bg-transparent capitalize focus:outline-none"><option value="all">All categories</option>{categories.slice(1).map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
    </div>
    {isLoading ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"><ProductSkeleton /><ProductSkeleton /><ProductSkeleton /><ProductSkeleton /><ProductSkeleton /><ProductSkeleton /><ProductSkeleton /><ProductSkeleton /></div> : error ? <ApiError message={error} retry={retry} /> : filtered.length ? <><div className="mb-5 flex items-center justify-between font-mono text-[.67rem] uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]"><span>Showing {filtered.length} of {products.length}</span>{(query || category !== 'all') && <button type="button" onClick={() => { setQuery(''); setCategory('all'); }} data-testid="button-clear-filters" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--accent))]">Clear filters</button>}</div><ProductGrid products={filtered} /></> : <EmptyState title="Nothing on this shelf." body="Try a different word or open up the category filter. The good stuff is usually nearby." />}
  </div>;
}