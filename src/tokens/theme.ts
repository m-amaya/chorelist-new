import {
  AppShell,
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  Menu,
  mergeMantineTheme,
  Tooltip
} from "@mantine/core";
import chroma from "chroma-js";

const shamrock = [
  "#ecfdf4",
  "#d1fae2",
  "#a8f2cb",
  "#6fe6af",
  "#45d597",
  "#12b775",
  "#06955f",
  "#057750",
  "#075e40",
  "#074d36"
] as const;

const themeOverride = createTheme({
  autoContrast: true,
  colors: {
    shamrock
  },
  cursorType: "pointer",
  defaultRadius: 6,
  focusRing: "auto",
  fontFamily: "'Inter Variable', sans-serif",
  headings: {
    fontFamily: "'Hepta Slab Variable', serif"
  },
  primaryColor: "shamrock",
  other: {
    shamrock: {
      white: chroma(shamrock[1]).brighten(0.6).css(),
      black: "#03110d"
    }
  },
  components: {
    AppShell: AppShell.extend({
      styles: {
        navbar: {
          backgroundColor: "var(--mantine-navbar-bg)",
          borderRadius: "6px"
        }
      }
    }),
    Menu: Menu.extend({
      styles: {
        dropdown: {
          "--popover-border-color": "var(--mantine-popover-border-color)",
          backgroundColor: "var(--mantine-menu-bg)"
        },
        itemLabel: {
          fontSize: "16px"
        }
      }
    }),
    Tooltip: Tooltip.extend({
      defaultProps: {
        offset: 10
      }
    })
  }
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--mantine-border-radius": `${theme.defaultRadius}px`
  },
  light: {
    "--mantine-color-body": theme.other.shamrock.white,
    "--mantine-menu-bg": theme.white,
    "--mantine-menu-item-hover": theme.colors.shamrock[1],
    "--mantine-navbar-bg": chroma(theme.other.shamrock.white).darken(0.2).css(),
    "--mantine-navlink-active-bg": chroma(theme.other.shamrock.white)
      .darken(0.4)
      .css(),
    "--mantine-navlink-active-color": theme.colors.shamrock[6],
    "--mantine-navlink-hover": chroma(theme.other.shamrock.white)
      .darken(0.4)
      .css(),
    "--mantine-popover-border-color": chroma(theme.other.shamrock.white)
      .darken(0.4)
      .css(),
    "--mantine-profile-menu-button-hover": chroma(theme.other.shamrock.white)
      .darken(0.4)
      .css()
  },
  dark: {
    "--mantine-color-body": theme.other.shamrock.black,
    "--mantine-menu-bg": chroma(theme.other.shamrock.black).brighten(0.4).css(),
    "--mantine-menu-item-hover": theme.colors.shamrock[9],
    "--mantine-navbar-bg": chroma(theme.other.shamrock.black)
      .brighten(0.2)
      .css(),
    "--mantine-navlink-active-bg": chroma(theme.other.shamrock.black)
      .brighten(0.4)
      .css(),
    "--mantine-navlink-active-color": theme.colors.shamrock[4],
    "--mantine-navlink-hover": chroma(theme.other.shamrock.black)
      .brighten(0.4)
      .css(),
    "--mantine-popover-border-color": chroma(theme.other.shamrock.black)
      .brighten(0.6)
      .css(),
    "--mantine-profile-menu-button-hover": chroma(theme.other.shamrock.black)
      .brighten(0.4)
      .css()
  }
});
