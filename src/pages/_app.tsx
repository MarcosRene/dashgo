import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { SidebarDrawerProdiver } from "../contexts/SidebarDrawerContext";

import { makeServer } from "../services/mirage";

import { theme } from "../styles/theme";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProdiver>
        <Component {...pageProps} />
      </SidebarDrawerProdiver>
    </ChakraProvider>
  );
}

export default MyApp;
