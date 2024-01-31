import type {Meta, StoryObj} from '@storybook/react'
import FormWeb, { FormProps } from './FormWeb'
import React, { FC } from 'react'
import Input from '../../atoms/Input/InputWeb'
import Button from '../../atoms/Button/ButtonWeb'
import Details from '../../atoms/Details/DetailsWeb'

const Form: FC<FormProps> = (args) => {
  return <FormWeb {...args}>
    <Input label='Username' />
    <Input label='password' />
    <Button 
      colorMessage='continue' 
      size='100%' 
      text='Create User'
      type='button'
    />
  </FormWeb>
}

const meta: TMeta = {
  component: Form
}

export default meta

export const Primary: Story = {
  args: {
    formTitle: 'Create User'
  }
}

export const FormInDetails: Story = {
  render: (args) => {
    return <Details summary='Create User'>
      <FormWeb {...args}>
        <Input label='Username' />
        <Input label='password' />
        <Button 
          colorMessage='continue' 
          size='100%' 
          text='Create User'
          type='button'
        />
      </FormWeb>
    </Details>
  },
  args: {
    ...Primary.args
  }
}

type TFrom = typeof FormWeb
type TMeta = Meta<TFrom>
type Story = StoryObj<TFrom>