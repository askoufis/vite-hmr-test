# VE HMR Test

Reproduces a VE HMR issue.

## Reproduction

1. Run `pnpm install && pnpm dev`
1. Change the `primary` color in `tokens.ts`
1. HMR happens, the raw token value in the markup changes but the style that consumes it does not.
