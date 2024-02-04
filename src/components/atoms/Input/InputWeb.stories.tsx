import React from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import Input from './InputWeb'
import useInputs from '../../../hooks/useInputs/useInputsWeb'

const meta: Meta<TInput> = {
  component: Input,
  args: {
    label: 'User',
    required: false,
    inputInvalid: false,
    acceptanceCriteria: 'Only letters and spaces',
    name: 'username',
    id: '',
    pattern: '^[\\p{L}\\s]+$',
    minLength: 0,
    showAcceptanceCriteria: undefined
  },
  argTypes: {
    minLength: {
      type: 'number',
      name: 'Min Length'
    },
    acceptanceCriteria: {
      name: 'Acceptance Criteria'
    },
    inputInvalid: {
      name: 'Input Is Invalid',
    },
    name: {
      name: 'Name'
    },
    required: {
      name: 'Required'
    },
    label: {
      name: 'Label'
    },
    id: {
      name: 'Id'
    },
    pattern: {
      name: 'Pattern'
    }
  }
}

export default meta

export const Primary: Story = {
}

export const InputWithHook: Story = {
  render: (args) => {
    const {
      inputsData, 
      onChange, 
      onBlur,
      inputsErrors
    // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useInputs({
      username: ''
    }, true)
    return <Input
      {...args}
      value={inputsData.username}
      onChange={onChange}
      onBlur={onBlur}
      inputInvalid={inputsErrors.username}
    />
  }
}

type Story = StoryObj<typeof Input>
type TInput = typeof Input