import { color, create } from "@storybook/theming";
import { globalCSS, foundations } from "@go1d/go1d";
const { colors, type } = foundations;

globalCSS();

export default create({
  base: "light",

  // Colors
  colorPrimary: colors.accent,
  colorSecondary: colors.accent,

  appBg: colors.faint,
  appContentBg: colors.background,
  appBorderColor: colors.thin,
  appBorderRadius: 8,

  // Text colors
  textColor: colors.default,
  textInverseColor: colors.faint,

  // Form colors
  inputBg: colors.background,
  inputBorder: colors.thin,
  inputTextColor: colors.default,
  inputBorderRadius: 8,

  // Toolbar default and active colors
  barTextColor: colors.default,
  barSelectedColor: colors.accent,
  barBg: colors.background,

  // Typography
  fontBase: type.family.ui,
  fontCode: type.family.mono,

  // Title, URL, logo/favicon
  brandTitle: "Go1d",
  brandUrl: "https://go1d.go1.com",
  brandImage: "https://www.go1.com/static/favicon-32x32.png",
});
