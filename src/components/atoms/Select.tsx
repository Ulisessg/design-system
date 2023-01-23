import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { ComponentProps } from '../../lib';
import { LabelStyles } from './Input/InputStyles';


export default forwardRef<HTMLSelectElement, SelectProps>(function Select({ 
  allowDefaultValue = true,
...props}, 
ref) {
  return (<LabelStyles htmlFor={props.id}>
  <SelectStyles 
    {...props} 
    ref={ref}
    id={props.id}
    data-default-value={props.defaultValue}  
    data-allow-default={allowDefaultValue}
    className={props.selectIsInvalid ? `${props.className} select-invalid-style`: `${props.className} `}
  >
      {props.children}
    </SelectStyles>
  </LabelStyles>
  )
})


const SelectStyles = styled.select<{selectIsInvalid?: boolean}>`
  width: 100%;
  padding: 18px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 5px 6px 0px ${({ theme }) => theme.colors.shadow};
  border: 1.8px solid ${({theme}) => theme.colors.light2};
  &:hover, &:focus {
    box-shadow: 0px 0px 5px 1px ${({ theme }) => theme.colors.light2};
    outline: 2.5px solid ${({theme, selectIsInvalid}) => {
      if(selectIsInvalid) return theme.colors.error
      return theme.colors.light2
    }};
  }
  &:valid {
    border: 1.8px solid ${({ theme }) => theme.colors.light2};
  }
  &:invalid, &.select-invalid-style {
    box-shadow: 0px 0px 2px 1px ${({theme})=> theme.colors.error};
    border: 1.8px solid ${({theme})=> theme.colors.error};
  }
`


interface SelectProps extends ComponentProps<'select'> {
  labelText: string
  id: string
  /** Select name */
  name: string
  /** If uses "defaultValue" prop and want to mark as error if still selected, default true (allowed) */
  allowDefaultValue?: boolean
  /** Change select border color if is invalid, by default "false" */
  selectIsInvalid?: boolean
}