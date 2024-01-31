import {Meta, StoryObj} from '@storybook/react'
import ButtonWeb from './ButtonWeb'

const meta: Meta<Button> = {
  component: ButtonWeb,
  
  argTypes: {
    size: { 
      type: "select" as any,
      options: ['small', "large", '100%'],
      defaultValue: 'small'
    },
    colorMessage: {
      type: 'select' as any,
      options: ['continue', 'cancel', 'info'],
      defaultValue: 'continue'
    }
  },
}

export default meta

export const Primary: Story = {
  args: {
    text: 'Click Me!',
    size: 'small',
    colorMessage: 'continue'
  }
}

type Story = StoryObj<Button>
type Button = typeof ButtonWeb
