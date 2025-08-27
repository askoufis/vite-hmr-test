import {
  app,
  libStyleConsumer,
  nestedComplexStyle,
  nestedConstant,
  nestedLibStyleConsumer,
} from "./App.css.ts";

export function App() {
  return (
    <div>
      <div className={app}>Regular style</div>
      <div className={nestedConstant}>Nested constant</div>
      <div className={nestedComplexStyle}>Nested complex style</div>
      <div className={libStyleConsumer}>Indirect lib style</div>
      <div className={nestedLibStyleConsumer}>Nested indirect lib style</div>
    </div>
  );
}
