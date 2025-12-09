# Ocean Library (Nuxt 3)

A modern, minimalist library UI using the Ocean Professional theme. Features:
- Header with subtle gradient and sticky behavior
- Search bar with client-side filtering (title, author, tags)
- Responsive grid/list of books with accessible BookCard components
- Dynamic book detail route at `/books/[id]`
- Smooth transitions, rounded corners, subtle shadows
- In-memory dataset with future-ready public env config

## Setup

Install dependencies:

```bash
# npm
npm install
```

## Development

Start the dev server on http://localhost:3000:

```bash
npm run dev
```

## Environment Variables

Public variables are optional and can be set for future backend integration. See `.env.example`.

## Production

Build and preview:

```bash
npm run build
npm run preview
```
