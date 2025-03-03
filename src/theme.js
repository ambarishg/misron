import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    brand: {
      50: "#E6F6FF",
      100: "#BAE3FF",
      200: "#7CC4FA",
      300: "#47A3F3",
      400: "#2186EB",
      500: "#0967D2",
      600: "#0552B5",
      700: "#03449E",
      800: "#01337D",
      900: "#002159",
    },
  },
  fonts: {
    heading: '"Montserrat", sans-serif',
    body: '"Open Sans", sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      variants: {
        solid: (props) => ({
          bg: props.colorScheme === "brand" ? "brand.500" : undefined,
          _hover: {
            bg: props.colorScheme === "brand" ? "brand.600" : undefined,
          },
        }),
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "bold",
      },
    },
  },
})

export default theme

