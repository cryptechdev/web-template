import { createTheme } from "@mui/material/styles";
import daisyuiThemes from "./daisyui-themes.json";

const themes: any = daisyuiThemes || {};

export const generateTheme = (theme: string) => {
  const daisyTheme = themes[theme];
  const newTheme = createTheme({
    palette: {
      mode: theme === "defaultDark" ? "dark" : "light",
      primary: {
        main: daisyTheme.primary,
      },
      secondary: {
        main: daisyTheme.secondary,
      },
      error: {
        main: daisyTheme.error,
      },
      warning: {
        main: daisyTheme.warning,
      },
      info: {
        main: daisyTheme.info,
      },
      success: {
        main: daisyTheme.success,
      },
    },
  });

  return newTheme;
};
