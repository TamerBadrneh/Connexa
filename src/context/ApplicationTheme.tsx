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
        fontFamily: "Inter, sans-serif",

        htmlFontSize: 16,

        allVariants: {
            textTransform: "none"
        },

        h1: {
            fontSize: "2rem",
            fontWeight: 700,
            lineHeight: 1.6,
        },


        h2: {
            fontSize: "1.75rem",
            fontWeight: 700,
            lineHeight: 1.6,
        },

        h3: {
            fontSize: "1.5rem",
            fontWeight: 700,
            lineHeight: 1.5,
        },

        body1: {
            fontSize: "1.125rem",
            lineHeight: 1.4,
        },

        body2: {
            fontSize: "1rem",
            lineHeight: 1.5,
        },

        subtitle1: {
            fontSize: "0.875rem",
            lineHeight: 1.6,
        },

        subtitle2: {
            fontSize: "0.625rem",
            lineHeight: 1.6,
        },
    },

    spacing: (factor: number) =>
        [4, 8, 12, 16, 20, 24, 28, 40, 60, 100, 160, 240][factor] / 16 + "rem",

    components: {

        MuiInputBase: {
            styleOverrides: {
                input: {
                    fontSize: "0.875rem",
                },
            },
        },

        MuiInputLabel: {
            styleOverrides: {
                root: {
                    fontSize: "0.875rem",
                    lineHeight: 1.6,
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: "0 5px 12px rgba(0, 0, 0, 0.2)",
                },
            },
        },
    }
});

export { ApplicationTheme };