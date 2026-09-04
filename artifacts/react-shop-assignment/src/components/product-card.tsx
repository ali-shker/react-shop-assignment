import { Plus, Star } from 'lucide-react';
import type { Product } from '@/hooks/use-products';
import { useCart } from '@/store/cart-redux';

export function ProductCard({ product, featured = false }: { product: Product; featured?: boolean }) {
  const { dispatch } = useCart();
  const category = product.category.replace('men\'s clothing', 'menswear').replace('women\'s clothing', 'womenswear');
  return (
    <article className={`group relative flex flex-col overflow-hidden rounded-[1.4rem] border border-[hsl(var(--border))] bg-[hsl(var(--card))] transition-transform duration-300 hover:-translate-y-1 ${featured ? 'min-h-[410px]' : ''}`} data-testid={`card-product-${product.id}`}>
      <div className="relative flex h-64 items-center justify-center bg-[hsl(var(--muted))] p-8 sm:h-72">
        <span className="absolute left-4 top-4 rounded-full bg-[hsl(var(--card))] px-3 py-1 font-mono text-[.58rem] uppercase tracking-[.13em] text-[hsl(var(--muted-foreground))]">{category}</span>
        <img src={product.image} alt={product.title} className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" loading="lazy" data-testid={`img-product-${product.id}`} />
        <button type="button" onClick={() => dispatch({ type: 'cart/add', product })} aria-label={`Add ${product.title} to bag`} data-testid={`button-add-product-${product.id}`} className="absolute bottom-4 right-4 grid h-11 w-11 place-items-center rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-lg transition-all hover:scale-105 hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]">
          <Plus size={20} />
        </button>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center justify-between gap-2">
          <span className="flex items-center gap-1 font-mono text-[.68rem] text-[hsl(var(--muted-foreground))]"><Star size={12} fill="currentColor" /> {product.rating.rate} <span className="opacity-60">({product.rating.count})</span></span>
          <span className="font-mono text-[.72rem] uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]">#{String(product.id).padStart(2, '0')}</span>
        </div>
        <h3 className="line-clamp-2 font-display text-[1.12rem] leading-tight text-[hsl(var(--foreground))]" data-testid={`text-product-title-${product.id}`}>{product.title}</h3>
        <p className="mt-auto pt-5 font-mono text-sm font-medium text-[hsl(var(--primary))]" data-testid={`text-product-price-${product.id}`}>${product.price.toFixed(2)}</p>
      </div>
    </article>
  );
}

export function ProductSkeleton() {
  return <div className="overflow-hidden rounded-[1.4rem] border border-[hsl(var(--border))] bg-[hsl(var(--card))]"><div className="h-72 animate-pulse bg-[hsl(var(--muted))]" /><div className="space-y-3 p-5"><div className="h-3 w-1/3 animate-pulse rounded bg-[hsl(var(--muted))]" /><div className="h-5 w-4/5 animate-pulse rounded bg-[hsl(var(--muted))]" /><div className="h-4 w-1/4 animate-pulse rounded bg-[hsl(var(--muted))]" /></div></div>;
}

export function ProductGrid({ products, featured = false }: { products: Product[]; featured?: boolean }) {
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.map((product) => <ProductCard key={product.id} product={product} featured={featured} />)}</div>;
}