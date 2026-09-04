# Luma Market

Luma Market is a small, responsive React shopping application created for a
React.js assignment. It presents a curated product storefront where visitors
can browse products loaded from an API, search and filter the catalogue, add
products to a shopping bag, update quantities, and complete a pretend
checkout.

The project intentionally keeps the implementation easy to study while
combining the main React concepts covered in the assignment.

## Features

- Product catalogue loaded from the [Fake Store API](https://fakestoreapi.com/)
- Product search and category filtering
- Reusable product cards, grids, layout, loading, error, and empty-state components
- Redux-powered global shopping bag
- Shopping bag quantity controls and item removal
- Cart persistence with `localStorage`
- Pretend checkout form with required field validation
- Submission success state after checkout
- Responsive navigation for desktop and mobile
- Accessible labels, buttons, focus states, and image alt text
- Loading, API error, empty results, and not-found page states

## React concepts demonstrated

| Concept | Where it is used |
| --- | --- |
| JSX | All `.tsx` components in `artifacts/react-shop-assignment/src` |
| Reusable components | `ProductCard`, `ProductGrid`, `SiteLayout`, `EmptyState`, and `ApiError` |
| Props | Product data passed into `ProductCard` and `ProductGrid` |
| `useState` | Search text, selected category, checkout feedback, and API state |
| `useEffect` | Product fetching and cart persistence |
| `useContext` | Currency and cart context in `src/store/cart-redux.tsx` |
| Redux | Global cart reducer, store, `Provider`, `useSelector`, and `useDispatch` |
| `.map()` | Product cards, cart rows, navigation items, and category options |
| Event handling | Search, filtering, add-to-cart, quantity, remove, and form events |
| Conditional rendering | Loading, error, empty, filtered, cart, and checkout states |
| Forms | Pretend checkout form on the Cart page |
| React Router | Home, Products, Cart, About, and 404 routes |
| API fetching | `src/hooks/use-products.ts` with `fetch()` and `useEffect()` |

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Home page with the storefront introduction and featured products |
| `/products` | Searchable and filterable product catalogue |
| `/cart` | Redux shopping bag and pretend checkout form |
| `/about` | Explanation of the React concepts used in the app |
| `/404` | Styled fallback page for unknown routes |

## Project structure

```text
artifacts/react-shop-assignment/
├── index.html
├── package.json
├── vite.config.ts
├── public/
└── src/
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    ├── components/
    │   ├── data-states.tsx
    │   ├── error-boundary.tsx
    │   ├── product-card.tsx
    │   └── site-layout.tsx
    ├── hooks/
    │   └── use-products.ts
    ├── pages/
    │   ├── about.tsx
    │   ├── cart.tsx
    │   ├── home.tsx
    │   ├── not-found.tsx
    │   └── products.tsx
    └── store/
        └── cart-redux.tsx
```

## Run locally

This repository uses pnpm workspaces.

```bash
pnpm install
pnpm --filter @workspace/react-shop-assignment run dev
```

The Vite development server will start the app and provide a local preview.

## Validate the project

Run the TypeScript check:

```bash
pnpm --filter @workspace/react-shop-assignment run typecheck
```

Create a production build:

```bash
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/react-shop-assignment run build
```

## Technology

- React
- TypeScript with JSX
- Vite
- React Router
- Redux and React Redux
- Tailwind CSS
- Lucide React icons
- Fake Store API

## Notes

This is an educational storefront. Checkout is intentionally simulated and
does not process payments or create real orders. Product images and product
information come from the Fake Store API.

## Submission repository

The project is also available on GitHub:

https://github.com/ali-shker/react-shop-assignment