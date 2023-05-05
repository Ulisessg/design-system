import React from 'react'
import { forwardRef } from 'react'
import Input from '../atoms/Input/InputWeb'
import { InputProps } from '../atoms/Input/InputProps'

export default forwardRef<HTMLDataListElement, DatalistProps>(function Datalist(props, ref) {
  const { inputProps, ...rest } = props
  return <>
  <Input
    {...inputProps}
    id={props.id}
    inputMode={inputProps?.inputMode || 'text'}
    label={props.label}
    name={props.name}
    type={inputProps?.type as any || 'text'}
    list={`${props.id}-list`}
  />
  <datalist {...rest} ref={ref} id={`${props.id}-list`}>
    {props.children}
  </datalist>
</>
})

export interface DatalistProps extends ComponentProps<'datalist'> {
  /** Label text for 'label' element */
  label: string;
  /** Input id, used for htmlFor prop in label */
  id: string;
  /** Input name */
  name: string;
  /** Input props */
  inputProps?: ComponentProps<'input'> & Pick<InputProps, 'acceptanceCriteria' | 'inputInvalid'>
}