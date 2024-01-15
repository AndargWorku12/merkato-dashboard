import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import ShopProductPage from "./productpages/ProductPage"
import ProductCategory from "./productCategory/ProductCategory"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <ShopProductPage/>
      <ProductCategory/>
    </Box>
  </ChakraProvider>
)
