import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import Store from "./Store";
import { Provider } from "react-redux";
createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Provider store={Store}>
          <App/>
        </Provider>
  </StrictMode>
)