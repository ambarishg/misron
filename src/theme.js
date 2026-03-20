import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#F2F6F9",
      100: "#D9E2EC",
      200: "#BCCCDC",
      300: "#9FB3C8",
      400: "#829AB1",
      500: "#627D98",
      600: "#486581",
      700: "#334E68",
      800: "#243B53",
      900: "#102A43",
    },
    accent: {
      50: "#F7F4EF",
      100: "#EAE2D6",
      200: "#D9C9B3",
      300: "#C6AD8E",
      400: "#B39067",
      500: "#97744D",
      600: "#775A3B",
      700: "#5B442C",
      800: "#3E2E1D",
      900: "#261A10",
    },
  },
  fonts: {
    heading: '"Montserrat", sans-serif',
    body: '"Open Sans", sans-serif',
  },
  styles: {
    global: {
      body: {
        color: "#102A43",
        bg: "#F7F8FA",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "full",
      },
      variants: {
        solid: (props) => ({
          bg:
            props.colorScheme === "brand"
              ? "brand.700"
              : props.colorScheme === "accent"
                ? "brand.900"
                : undefined,
          color: "white",
          _hover: {
            bg:
              props.colorScheme === "brand"
                ? "brand.800"
                : props.colorScheme === "accent"
                  ? "brand.800"
                  : undefined,
          },
        }),
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "700",
        letterSpacing: "-0.02em",
      },
    },
  },
});

export default theme;
