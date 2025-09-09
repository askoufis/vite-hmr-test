import { style } from "@vanilla-extract/css";
import { colors, deepStyle } from "./tokens.css.ts";

export const color = style({
  color: colors.primary,
});

export const complexStyle = style([
  deepStyle,
  {
    border: `8px solid black`,
  },
]);
