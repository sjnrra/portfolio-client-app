import { createTheme, ThemeProvider } from "@mui/material/styles";
export const customiseTypography = createTheme({
    typography: {
        fontFamily: `"Meiryo", "Hiragino Kaku Gothic ProN", "Yu Gothic", sans-serif`,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 700,

        h1: { fontSize: 60 },
        h2: { fontSize: 48 },
        h3: { fontSize: 42 },
        h4: { fontSize: 36 },
        h5: { fontSize: 20 },
        h6: { fontSize: 18 },
        subtitle1: { fontSize: 18 },
        body1: { fontSize: 14 },
        button: { textTransform: 'none' },
    },
})
export default customiseTypography;