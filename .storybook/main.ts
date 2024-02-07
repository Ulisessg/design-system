import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: [
    "../src/index.stories.tsx",
    "../src/**/*.mdx",
     "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
    ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {
      strictMode: true,
      nextConfigPath: '../next.config.js',
    },
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
