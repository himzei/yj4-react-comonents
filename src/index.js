import React from "react";
import ReactDOM from "react-dom/client";
// Chakra Provider
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
// react-router
import { RouterProvider } from "react-router-dom";
import router from "./router";
// react query
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
