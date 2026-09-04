import { Brackets, CircleDot, Code2, Layers3 } from 'lucide-react';
import { PageEyebrow } from '@/components/site-layout';

const concepts = [
  { icon: Code2, number: '01', title: 'Components', text: 'Product cards, data states, and the site shell are reusable pieces. Props decide how each piece behaves.' },
  { icon: CircleDot, number: '02', title: 'State & events', text: 'Search, filters, quantities, and checkout feedback use useState with onChange, onClick, and onSubmit.' },
  { icon: Layers3, number: '03', title: 'Shared cart', text: 'A small Redux-style store keeps cart state global while CartContext makes the store available across routes.' },
  { icon: Brackets, number: '04', title: 'API & effects', text: 'useEffect loads products from Fake Store API and handles loading, error, retry, and empty states.' },
];

export default function About() {
  return <div className="py-14 sm:py-20">
    <section className="reveal max-w-4xl"><PageEyebrow>Behind the counter</PageEyebrow><h1 className="mt-5 font-display text-[clamp(3.2rem,8vw,7rem)] leading-[.88] tracking-[-.065em] text-[hsl(var(--primary))]">A small app with<br /><em className="text-[hsl(var(--accent))]">big basics.</em></h1><p className="mt-8 max-w-xl text-lg leading-8 text-[hsl(var(--muted-foreground))]">Luma Market is a study in making a React assignment feel like a real little place. Under the warm colors and rounded corners are the patterns worth learning.</p></section>
    <section className="mt-20 grid gap-px overflow-hidden rounded-[1.5rem] border border-[hsl(var(--border))] bg-[hsl(var(--border))] sm:grid-cols-2">
      {concepts.map(({ icon: Icon, number, title, text }) => <article key={number} className="bg-[hsl(var(--card))] p-7 transition-colors hover:bg-[hsl(var(--secondary))] sm:p-9" data-testid={`card-concept-${number}`}><div className="flex items-start justify-between"><span className="font-mono text-xs text-[hsl(var(--accent))]">{number}</span><Icon size={22} strokeWidth={1.6} className="text-[hsl(var(--primary))]" /></div><h2 className="mt-14 font-display text-3xl">{title}</h2><p className="mt-3 max-w-sm text-sm leading-6 text-[hsl(var(--muted-foreground))]">{text}</p></article>)}
    </section>
    <section className="mt-20 grid gap-8 border-t border-[hsl(var(--border))] pt-8 sm:grid-cols-[.7fr_1.3fr]"><PageEyebrow>How to read the source</PageEyebrow><div className="max-w-2xl text-[1.05rem] leading-8 text-[hsl(var(--muted-foreground))]"><p>Start in <code className="rounded bg-[hsl(var(--secondary))] px-1.5 py-1 font-mono text-sm text-[hsl(var(--primary))]">App.tsx</code> for routes, then follow the data into <code className="rounded bg-[hsl(var(--secondary))] px-1.5 py-1 font-mono text-sm text-[hsl(var(--primary))]">use-products.ts</code>. The cart reducer is intentionally plain: actions go in, a new state comes out.</p><p className="mt-5">There is no backend to hide behind here. The browser fetches the catalog, renders each item with <code className="rounded bg-[hsl(var(--secondary))] px-1.5 py-1 font-mono text-sm text-[hsl(var(--primary))]">map()</code>, and makes the whole storefront responsive with a few deliberate layout rules.</p></div></section>
  </div>;
}