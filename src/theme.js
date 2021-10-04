import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { TryRounded } from "@mui/icons-material";

const backgroundColor = "#0a1929";
const highlightColor = "#66b2ff";

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: backgroundColor,
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
