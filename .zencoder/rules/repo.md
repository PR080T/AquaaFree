# Repository Notes

- **Project type**: Next.js application for Aquaafree marketing site and quotation capture.
- **Styling**: Tailwind CSS classes used throughout components/pages.
- **Forms**: Reusable components like `LoadingSpinner` and `FormProgressIndicator` available. Toast notifications handled via `useToast` from `lib/toast-context`.
- **State management**: React hooks (`useState`, `useEffect`). No global state library.
- **Data persistence**: `pages/api` routes post data to Prisma database via `lib/db.js` helper methods.
- **Testing**: Jest setup in `test/utils.js` with React Testing Library.
- **Important pages**: `pages/index.js`, `pages/about.js`, `pages/contact.js`, `pages/quotation.js`.