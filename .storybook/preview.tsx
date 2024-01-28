import React from 'react';
import type { Preview } from "@storybook/react";
import GlobalStyles from '../src/components/pages/GlobalStyles.tsx'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [(Story) => {
    return <GlobalStyles footer={false}>
      <Story />
    </GlobalStyles>
  }]
};

export default preview;
