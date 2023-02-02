import React from 'react'
import { forwardRef } from 'react'
import { Input } from '../atoms/Input'
import { InputProps } from '../atoms/Input/InputProps'

export default forwardRef<HTMLDataListElement, DatalistProps>(function Datalist(props, ref) {
  return <>
  <Input
    {...props.inputProps}
    id={props.id}
    inputMode={props.inputProps?.inputMode || 'text'}
    label={props.label}
    name={props.name}
    type={props.inputProps?.type as any || 'text'}
    list={`${props.id}-list`}
  />
  <datalist {...props} ref={ref} id={`${props.id}-list`}>
    {props.children}
  </datalist>
</>
})

interface DatalistProps extends ComponentProps<'datalist'> {
  /** Label text for 'label' element */
  label: string;
  /** Input id, used for htmlFor prop in label */
  id: string;
  /** Input name */
  name: string;
  /** Input props */
  inputProps?: ComponentProps<'input'> & Pick<InputProps, 'acceptanceCriteria' | 'inputInvalid'>
}