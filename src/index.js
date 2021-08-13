import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AcquiredContextProvider } from "./store/acquired-context";

ReactDOM.render(
  <AcquiredContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AcquiredContextProvider>,
  document.getElementById("root")
);
