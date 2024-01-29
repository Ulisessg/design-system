import type {Meta, StoryObj} from '@storybook/react'
import Link from './Link'

const meta: TMeta = {
  component: Link,
  args: {
    version: 'darker',
    href: '#',
    text: 'Link to #'
  }
}

export default meta

export const Primary: Story = {
  
}

type TLink = typeof Link
type Story = StoryObj<TLink>
type TMeta = Meta<TLink>