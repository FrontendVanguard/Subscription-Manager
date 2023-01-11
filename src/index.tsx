import ReactDOM from "react-dom/client";

import { App } from "./components/App/App";
import { GlobalStyle } from "./globalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
