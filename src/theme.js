import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  radii: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    "2xl": "28px",
  },
  shadows: {
    outline: "0 0 0 3px rgba(16, 42, 67, 0.14)",
    elevated: "0 18px 44px rgba(15, 23, 42, 0.08)",
    crisp: "0 8px 24px rgba(15, 23, 42, 0.08)",
  },
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
      "html, body, #root": {
        minHeight: "100%",
      },
      body: {
        color: "#102A43",
        bg: "linear-gradient(180deg, #F8FAFC 0%, #F2F5F8 46%, #EEF2F6 100%)",
      },
      "::placeholder": {
        color: "#7B8794",
      },
      "*:focus-visible": {
        boxShadow: "outline",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "lg",
        letterSpacing: "-0.01em",
        transitionProperty: "transform, box-shadow, background-color, border-color, color",
        transitionDuration: "180ms",
        _hover: {
          transform: "translateY(-1px)",
        },
        _active: {
          transform: "translateY(0)",
        },
      },
      sizes: {
        sm: {
          px: 4,
          h: 9,
          fontSize: "sm",
        },
        md: {
          px: 5,
          h: 11,
          fontSize: "sm",
        },
        lg: {
          px: 6,
          h: 12,
          fontSize: "md",
        },
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
          boxShadow: "crisp",
          _hover: {
            bg:
              props.colorScheme === "brand"
                ? "brand.800"
                : props.colorScheme === "accent"
                  ? "brand.800"
                  : undefined,
            boxShadow: "elevated",
          },
        }),
        outline: (props) => ({
          borderWidth: "1px",
          borderColor:
            props.colorScheme === "whiteAlpha"
              ? "whiteAlpha.300"
              : props.colorScheme === "blackAlpha"
                ? "rgba(16, 42, 67, 0.16)"
                : "brand.200",
          color: props.colorScheme === "whiteAlpha" ? "white" : "brand.900",
          bg: props.colorScheme === "whiteAlpha" ? "whiteAlpha.50" : "rgba(255,255,255,0.72)",
          _hover: {
            bg: props.colorScheme === "whiteAlpha" ? "whiteAlpha.120" : "white",
            borderColor: props.colorScheme === "whiteAlpha" ? "whiteAlpha.500" : "brand.300",
          },
        }),
        ghost: (props) => ({
          color: props.colorScheme === "brand" ? "brand.800" : undefined,
          _hover: {
            bg: props.colorScheme === "brand" ? "brand.50" : "blackAlpha.50",
          },
        }),
        link: {
          color: "brand.800",
          textDecorationThickness: "1px",
          textUnderlineOffset: "0.18em",
          _hover: {
            color: "brand.900",
            textDecoration: "none",
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: "700",
        letterSpacing: "-0.03em",
        lineHeight: "1.05",
      },
    },
    Link: {
      baseStyle: {
        transitionProperty: "color, opacity",
        transitionDuration: "160ms",
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: "lg",
        fontWeight: "700",
        letterSpacing: "0.08em",
      },
    },
  },
});

export default theme;
