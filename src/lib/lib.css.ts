import { style } from "@vanilla-extract/css";
import { nested } from "./nestedLib.css";

// Updating this should invalidate `App.css.ts` and dependents
export const libColor = "black";

// Updating this should invalidate `App.css.ts` and dependents
export const libStyle = style({
  fontSize: "30px",
});

export const nestedLibStyle = style([nested, { border: "1px solid orange" }]);
