import type { StoryObj, Meta } from '@storybook/react';
import Datalist from './Datalist';

const meta: TMeta = {
  component: Datalist,
  args: {
    inputProps: {
      label: 'Compañias de Autos',
      
    }
  }
}

export default meta

export const Primary: Story = {
  render: (args) => {
    return <Datalist {...args}>
      {['Toyota', 'Chevrolet']
      .map((company) =><option value={company} key={company}>{company}</option> )}
      </Datalist>
  }
}

type TDataList = typeof Datalist
type Story = StoryObj<TDataList>
type TMeta = Meta<TDataList>