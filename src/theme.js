import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        brand: {
            500: "#F48C06", // Primary Orange
            600: "#d97706", // Darker Orange
            900: "#2F2E41", // Secondary Dark
        },
        gray: {
            50: "#FAFAFA",
        }
    },
    fonts: {
        heading: "'Outfit', sans-serif",
        body: "'Inter', sans-serif",
    },
    components: {
        Button: {
            baseStyle: {
                borderRadius: "full",
                fontWeight: "bold",
            },
            variants: {
                solid: {
                    bg: "brand.500",
                    color: "white",
                    _hover: {
                        bg: "brand.600",
                    },
                },
                outline: {
                    borderColor: "brand.500",
                    color: "brand.500",
                    _hover: {
                        bg: "brand.500",
                        color: "white",
                    },
                },
                ghost: {
                    color: "brand.900",
                    _hover: {
                        bg: "gray.100",
                    }
                }
            },
        },
        Heading: {
            baseStyle: {
                color: "brand.900",
            }
        }
    },
    styles: {
        global: {
            body: {
                bg: "gray.50",
                color: "brand.900",
            },
        },
    },
});

export default theme;
