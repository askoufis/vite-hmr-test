import { color, complexStyle } from "./App.css.ts";
import { deepToken } from "./deepToken.ts";
import { colors, unrelatedStyle } from "./tokens.css.ts";

export function App() {
  return (
    <div>
      <div className={color}>Token consumed in style</div>
      <div>Raw token: {colors.primary}</div>
      <div className={complexStyle}>complexStyle (uses deepStyle)</div>
      <div>deep token: {deepToken}</div>
      <div className={unrelatedStyle}>unrelated</div>
    </div>
  );
}
