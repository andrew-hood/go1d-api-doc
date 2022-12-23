import { generateTheme, Provider } from "@go1d/go1d";
import theme from "./theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewMode: "docs",
  theme: theme,
  backgrounds: {
    default: "White",
    values: [
      {
        name: "White",
        value: "#ffffff",
      },
      {
        name: "N100",
        value: "#F7F8F8",
      },
      {
        name: "N900",
        value: "#22292A",
      },
    ],
  },
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Get started", "Foundations", "Components", ["*"]],
    },
  },
};

const withThemeProvider = (Story, context) => {
  const theme = generateTheme({
    accent: context.globals.accent,
    mode: context.globals.mode,
  });
  return (
    <Provider theme={theme}>
      <Story {...context} />
    </Provider>
  );
};
export const decorators = [withThemeProvider];
