import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);




/**
 * component - buttons
 * parent to call data and send to the child
 * parent can have buttons and send prop to child to show the data
 */
