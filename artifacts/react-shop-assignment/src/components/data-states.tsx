import { AlertCircle, RefreshCw } from 'lucide-react';

export function ApiError({ message, retry }: { message: string; retry: () => void }) {
  return <div className="my-12 flex flex-col items-center justify-center rounded-[1.4rem] border border-[hsl(var(--accent)/.45)] bg-[hsl(var(--accent)/.1)] px-6 py-16 text-center" role="alert" data-testid="status-api-error">
    <AlertCircle className="mb-4 text-[hsl(var(--accent))]" size={30} />
    <h2 className="font-display text-2xl">The shelves are out of reach.</h2>
    <p className="mt-2 max-w-sm text-sm text-[hsl(var(--muted-foreground))]">{message}</p>
    <button type="button" onClick={retry} data-testid="button-retry-api" className="mt-6 flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-5 py-3 text-sm font-semibold text-[hsl(var(--primary-foreground))] transition-transform hover:-translate-y-0.5"><RefreshCw size={15} /> Try again</button>
  </div>;
}

export function EmptyState({ title, body }: { title: string; body: string }) {
  return <div className="rounded-[1.4rem] border border-dashed border-[hsl(var(--border))] bg-[hsl(var(--muted)/.5)] px-6 py-16 text-center" data-testid="status-empty"><p className="font-display text-2xl">{title}</p><p className="mx-auto mt-2 max-w-sm text-sm text-[hsl(var(--muted-foreground))]">{body}</p></div>;
}