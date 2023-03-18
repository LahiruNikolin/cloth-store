import { createTheme } from "@mui/material/styles";

export const primaryTheme = createTheme({
  typography: {
    fontFamily: "Arial",
    h3: {
      fontSize: 30,
    },
    body1: {
      fontWeight: 500,
    },
  },
});

// for any future requiremtns
export const darkTheme = createTheme({});
