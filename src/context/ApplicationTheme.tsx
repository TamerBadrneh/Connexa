import { createTheme } from "@mui/material";

const ApplicationTheme = createTheme({
    palette: {
        mode: "light",

        background: {
            default: "hsl(0, 0%, 95%)",
            paper: "hsl(0, 0%, 100%)",
        },

        primary: {
            main: "#1976d2",
        },

        secondary: {
            main: "hsl(0, 0%, 90%)",
        },

        error: {
            main: "#d32f2f",
        },

        warning: {
            main: "#f57c00",
        },

        success: {
            main: "#388e3c",
        },

        info: {
            main: "#64b5f6",
        },

        text: {
            primary: "hsl(0, 0%, 5%)",
            secondary: "hsl(0, 0%, 30%)",
        },

    },

    typography: {
        fontFamily: "IBM Plex Sans Arabic, sans-serif",

        htmlFontSize: 16,

        h1: {
            fontSize: "2rem",
            fontWeight: 700,
            lineHeight: 1.6,
            textAlign: "right",
        },

        h2: {
            fontSize: "1.75rem",
            fontWeight: 700,
            lineHeight: 1.6,
            textAlign: "right",
        },

        h3: {
            fontSize: "1.5rem",
            fontWeight: 700,
            lineHeight: 1.5,
            textAlign: "right",
        },

        body1: {
            fontSize: "1.125rem",
            lineHeight: 1.4,
            textAlign: "right",
        },

        body2: {
            fontSize: "1rem",
            lineHeight: 1.5,
            textAlign: "right",
        },

        subtitle1: {
            fontSize: "0.875rem",
            lineHeight: 1.6,
            textAlign: "right",
        },

        subtitle2: {
            fontSize: "0.625rem",
            lineHeight: 1.6,
            textAlign: "right",
        },
    },

    spacing: (factor: number) =>
        [4, 8, 12, 16, 20, 24, 28, 40, 60, 100, 160, 240][factor] / 16 + "rem",

    components: {

        MuiTextField: {
            styleOverrides: {
                root: {
                    direction: "rtl",
                }
            }
        },

        MuiInputLabel: {
            styleOverrides: {
                root: {
                    right: 0,
                    transformOrigin: "top right",
                    fontSize: "1rem",
                }
            }
        },

        MuiInputBase: {
            styleOverrides: {
                input: {
                    fontSize: "0.875rem",
                },
            },
        },

    }
});

export { ApplicationTheme };