import type {Meta, StoryObj} from '@storybook/react'
import TrashCan from './TrashCan'
import { spaceSize } from '../../../utils/constants'

const meta: TMeta = {
  component: TrashCan
}

export default meta

const size = Number(spaceSize) * 3
export const Primary: Story = {
  args: {
    title: 'Remove Item',
    width: size,
    height: size
  }
}

type TTrashCan = typeof TrashCan
type TMeta = Meta<TTrashCan>
type Story = StoryObj<TTrashCan>