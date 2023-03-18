import { createTheme } from "@mui/material/styles";

export const primaryTheme = createTheme({
  typography: {
    fontFamily: "Roboto",
    h3: {
      fontSize: "30px",
      fontWeight: 700,
      lineHeight: "40px",
    },
    h4: {
      fontSize: "16px",
      fontWeight: 700,
    },
    h5: {
      fontSize: "20px",
      fontWeight: 700,
    },
    h6: {
      fontSize: "16px",
      fontWeight: 700,
    },
    body1: {
      fontWeight: 500,
    },
    body4: {
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "17px",
    },
  },
});

// for any future requiremtns
export const darkTheme = createTheme({});
