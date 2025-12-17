import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store";
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
  </StrictMode>
)