import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { TryRounded } from "@mui/icons-material";

const backgroundColor = "#0a192f";
const highlightColor = "#64ffda";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(100, 255, 218)",
    },
    mode: "dark",
    background: {
      default: backgroundColor,
    },
  },
  typography: {
    fontFamily: ["Source Sans Pro"],
    allVariants: {
      color: "rgba(255,255,255,0.9)",
    },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltipArrow: {
          backgroundColor: "transparent",
          fontsize: 12,
          border: `solid 1px ${highlightColor}`,
        },
        arrow: {
          "&::before": {
            border: `solid 1px ${highlightColor}`,

            backgroundColor: backgroundColor,
          },
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        enableColorOnDark: true,
      },
      styleOverrides: {
        root: {
          backgroundColor: backgroundColor,
          color: highlightColor,
          backgroundImage: "unset",
        },
      },
    },
  },
});

export default theme;
export { highlightColor, backgroundColor };
