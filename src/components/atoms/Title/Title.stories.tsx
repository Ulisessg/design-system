import type {Meta, StoryObj} from '@storybook/react'
import Title from './Title'

const meta: TMeta = {
  component: Title,
  args: {
    children: 'Inicio'
  }
}

export default meta

export const Primary: StoryObj = {

}

type TTitle = typeof Title
type TMeta = Meta<TTitle>
type Story = StoryObj<TTitle>