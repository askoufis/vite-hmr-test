import { color } from "./App.css.ts";
import { colors } from "./tokens.ts";

export function App() {
  return (
    <div>
      <div className={color}>Token consumed in style</div>
      <div>Raw token: {colors.primary}</div>
    </div>
  );
}
