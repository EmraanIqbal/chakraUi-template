import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { ColorModeScript } from "@chakra-ui/react";
import customTheme from "./extendTheme";

ReactDOM.render(
  <ChakraProvider theme={customTheme}>
    <App />
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
  </ChakraProvider>,
  document.getElementById("root")
);
