import { style } from "@vanilla-extract/css";
import { primary, shared } from "./nested.css";
import { libColor, libStyle, nestedLibStyle } from "./lib/lib.ts";

// Updating any of these styles should invalidate `App.tsx`

export const app = style({
  color: "blue",
});

export const nestedConstant = style({
  color: primary,
});

export const nestedComplexStyle = style([
  shared,
  {
    color: "pink",
  },
]);

export const libStyleConsumer = style([
  libStyle,
  { padding: "20px", color: libColor },
]);

export const nestedLibStyleConsumer = style([
  nestedLibStyle,
  { color: "blue" },
]);
