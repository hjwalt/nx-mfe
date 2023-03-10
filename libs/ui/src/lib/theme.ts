import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  spacing: (factor: number) => `${0.25 * factor}rem`, // (Bootstrap strategy)
});
