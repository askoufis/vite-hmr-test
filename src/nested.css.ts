import { style } from "@vanilla-extract/css";

// Updating this should invalidate `App.css.ts` and dependents
export const primary = "orange";

// Updating this should invalidate `App.css.ts` and dependents
export const shared = style({
  fontSize: "40px",
});
