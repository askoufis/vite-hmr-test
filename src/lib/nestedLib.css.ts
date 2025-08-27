import { style } from "@vanilla-extract/css";
import { doubleNestedStyle } from "./doubleNestedLib.css";

export const nested = style([doubleNestedStyle, { fontStyle: "italic" }]);
