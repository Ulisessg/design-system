import React from 'react';
import type { Preview } from "@storybook/react";
import GlobalStyles from '../src/components/pages/GlobalStyles.tsx'
import {withConsole} from '@storybook/addon-console';
import Header from '../src/components/molecules/Header'
import Link from '../src/components/atoms/Link/Link.tsx'

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
    return <GlobalStyles footer={true} header={<Header><Link href="/" text='Home' /></Header>}>
      <Story />
    </GlobalStyles>
  },
  (storyFn, context) => withConsole()(storyFn)(context)
  ]
};

export default preview;
