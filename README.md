# VE HMR Test

This repo contains various HMR scenarios for VE modules.

## Scenarios

### Basic

`App.tsx` imports `App.css.ts`. Updating a style within `App.css.ts` should trigger an HMR update in `App.tsx`.

### Basic

`App.tsx` imports `App.css.ts`. Updating a style within `App.css.ts` should trigger an HMR update in `App.tsx`.

### Nested

`App.css.ts` imports `nested.css.ts`. Updating a value or a style within `nested.css.ts` should trigger an HMR update in `App.css.ts` and `App.tsx`.
