import type {Meta, StoryObj} from '@storybook/react'
import LoadingSpinner from './LoadingSpinner'

const meta: TMeta = {
  component: LoadingSpinner,
  args: {
    size: 'large'
  },
  argTypes: {
    size: {
      control: {
        type: 'select'
      },
      options: ['large', 'small']
    }
  }
}

export default meta

export const Primary: Story = {

}

type TLoadingSpinner = typeof LoadingSpinner
type TMeta = Meta<TLoadingSpinner>
type Story = StoryObj<TLoadingSpinner>