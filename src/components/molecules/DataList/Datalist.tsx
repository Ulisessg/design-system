import React, { useId } from 'react'
import { forwardRef } from 'react'
import Input from '../../atoms/Input/InputWeb'
import { InputWebProps } from '../../atoms/Input/InputProps'

const Datalist = forwardRef<HTMLDataListElement, DatalistProps>(function DatalistComponent(props, ref) {
  const { inputProps, ...rest } = props
  const listId = useId()
  return <>
  <Input
    {...inputProps}
    list={listId}
  />
  <datalist {...rest} ref={ref} id={listId}>
    {props.children}
  </datalist>
</>
})

export default Datalist

export interface DatalistProps extends ComponentProps<'datalist'> {
  /** Input props */
  inputProps: InputWebProps
}