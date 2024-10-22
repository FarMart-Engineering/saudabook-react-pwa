import React from "react";
import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import customTheme from "../utility/theme";
const theme = extendTheme({ ...customTheme });

export default function MuiThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CssVarsProvider theme={theme}>{children}</CssVarsProvider>;
}
