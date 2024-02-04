import React, { FC } from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import Details from './DetailsWeb'
import FormWeb from '../../molecules/Form/FormWeb'
import InputWeb from '../Input/InputWeb'
import ButtonWeb from '../Button/ButtonWeb'

const Children: FC = () => <p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut totam beatae tempore sapiente temporibus, excepturi suscipit distinctio 
  accusantium molestias earum odio minus vel
   asperiores dolore ratione quibusdam? Odio, beatae repudiandae!</p>

const Form: FC = () => <FormWeb formTitle='Create User'>
  <InputWeb label='Username' />
  <InputWeb label='password' type='password' />
  <ButtonWeb colorMessage='continue' size='large' text='Create user' type="button" />
</FormWeb>

const meta: Meta<TDetails> = {
  component: Details,
  args: {
    summary: 'Summary',
    children: <Children />
  }
}

export const Primary: StoryObj<TDetails> = {}
export const DetailsWithForm: StoryObj<TDetails> = {
  args: {
    children: <Form />,
    summary: 'Create User'
  }
}


export default meta

type TDetails = typeof Details