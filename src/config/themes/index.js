import { createTheme } from "@mui/material/styles";

export const primaryTheme = createTheme({
  typography: {
    fontFamily: "Roboto",
    h3: {
      fontSize: "30px",
      fontWeight: 700,
      lineHeight: "40px",
    },
    body1: {
      fontWeight: 500,
    },
  },
});

// for any future requiremtns
export const darkTheme = createTheme({});
