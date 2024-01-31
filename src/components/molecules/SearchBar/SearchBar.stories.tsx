import { Meta, StoryObj } from '@storybook/react';
import SearchBar from './SearchBar';

const meta: TMeta = {
  component: SearchBar
}

export default meta

export const Primary: Story = {
  args: {
    label: 'Titulo',
    buttonText: 'Buscar'
  }
}

type TSearchBar = typeof SearchBar
type TMeta = Meta<TSearchBar>
type Story = StoryObj<TSearchBar>