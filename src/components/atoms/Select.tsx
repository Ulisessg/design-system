import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { LabelStyles, AcceptanceCriteriaStyles, RequiredMark } from './Input/InputWeb' 


export default forwardRef<HTMLSelectElement, SelectProps>(function Select({allowDefaultValue = true,...props}, 
ref) {
  return (<LabelStyles htmlFor={props.id}>
    <p>
    {props.label}
    {props.required === true &&
        <RequiredMark aria-hidden={true}>*</RequiredMark>}
    </p>
  <SelectStyles 
    {...props} 
    ref={ref}
    id={props.id}
    data-default-value={props.defValue}  
    data-allow-default={allowDefaultValue}
    className={props.selectIsInvalid ? `${props.className || ''} select-invalid-style`: `${props.className || ''} `}
  >
      {props.children}
    </SelectStyles>
    <AcceptanceCriteriaStyles>{props.acceptanceCriteria}</ AcceptanceCriteriaStyles>
  </LabelStyles>
  )
})


const SelectStyles = styled.select<{selectIsInvalid?: boolean}>`
  height: ${({theme}) => theme.spacing * 4}px;
  padding-left: ${({theme}) => theme.spacing}px;
  border-radius: 5px;
  margin-bottom: ${({theme}) => theme.spacing}px;
  margin-top: ${({theme}) => theme.spacing}px;
  border: 1.8px solid ${({theme}) => theme.colors.light2};
  cursor: pointer;
  &:hover, &:focus {
    box-shadow: 0px 0px 5px 1px ${({ theme }) => theme.colors.light2};
    outline: 1px solid ${({theme, selectIsInvalid}) => {
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


export interface SelectProps extends ComponentProps<'select'> {
  label: string
  id: string
  /** Select name */
  name: string
  /** Value by default */
  defValue?: string
  /** If uses "defaultValue" prop and want to mark as error if still selected, default true (allowed) */
  allowDefaultValue?: boolean
  /** Change select border color if is invalid, by default "false" */
  selectIsInvalid?: boolean
  /**
   * Requirements to select
   */
  acceptanceCriteria?: string
}