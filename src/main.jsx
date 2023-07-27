import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import store from "./store.js";
import isPropValid from "@emotion/is-prop-valid";
import { StyleSheetManager } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StyleSheetManager
      shouldForwardProp={isPropValid}
      disableVendorPrefixes={false}
    >
      {/* <Provider store={store}>
      </Provider> */}
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StyleSheetManager>
  </React.StrictMode>
);
