import React, { FC } from 'react'
import type {Meta, StoryObj} from '@storybook/react'
import Select, { SelectProps } from './Select'
import capitalize from '../../../utils/capitalize'
import useInputs from '../../../hooks/useInputs/useInputsWeb'

const daysOfTheWeek = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
const Render:FC<SelectProps> =(args) => {
  return <Select {...args}>
    {daysOfTheWeek.map((day, index) =>
     <option value={day} key={index}>{capitalize(day)}</option>
     )
    }
  </Select>
}

const meta: TMeta = {
  component: Render,
  args: {
    label: 'Selecciona el dia de la semana',
    id: '',
    name: 'day',
    defValue: daysOfTheWeek[0],
    acceptanceCriteria: 'Acceptance Criteria⚠️',
    showAcceptanceCriteria: true
  },
  argTypes: {
    defValue: {
      type: 'select' as any,
      options: daysOfTheWeek,
      defaultValue: daysOfTheWeek[0]
    }
  }
}

export default meta

export const Primary: Story = {
  
}

const defValue = daysOfTheWeek[4]
export const SelectWithHook: Story = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {inputsData, onChange, inputsErrors} = useInputs({
      day: defValue
    }, true)
    return <Render 
      {...args} 
      value={inputsData.day} 
      onChange={onChange}
      selectIsInvalid={inputsErrors.day}
    />
  },
  args: {
    defValue: defValue,
    allowDefaultValue: false,
    acceptanceCriteria: '⚠️ Ese dia no está permitido',
    name: 'day'
  }
}

type TSelect = typeof Select
type TMeta = Meta<TSelect>
type Story = StoryObj<TSelect>