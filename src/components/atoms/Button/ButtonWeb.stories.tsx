import type {Meta, StoryObj} from '@storybook/react'
import ButtonWeb from './ButtonWeb'

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof ButtonWeb> = {
  component: ButtonWeb,
  args: {
    text: 'Click Me!',
    colorMessage: 'continue',
    size: 'small'
  },
  argTypes: {
    colorMessage: {
      options: ['cancel', 'continue', 'info'],
      control: {type: 'select'},
      
    },
    size: {
      options: ['small', 'large', '100%'],
      control: {type: 'select'},
    }
  }
}
type Story = StoryObj<typeof ButtonWeb>

export const Primary: Story = {
  args: {
    text: 'Click Me!' 
  }
}
export default meta