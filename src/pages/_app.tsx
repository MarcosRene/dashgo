import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { SidebarDrawerProdiver } from "../contexts/SidebarDrawerContext";

import { theme } from "../styles/theme";

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
