import React, { forwardRef, useId } from 'react'
import styled from 'styled-components'
import { LabelStyles, RequiredMark } from '../Input/InputWeb' 
import AcceptanceCriteria from '../AcceptanceCriteria/AcceptanceCriteriaWeb'
import { InputProps } from '../../..'


export default forwardRef<HTMLSelectElement, SelectProps>(function Select({allowDefaultValue = true,...props}, 
ref) {
  const defaultId = useId()
  const selectId = props.id || defaultId
  const selectIsInvalid: boolean = props.selectIsInvalid || (!allowDefaultValue && (props.defValue === props.value))
  return (<LabelStyles htmlFor={selectId}>
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
    className={selectIsInvalid ? `${props.className || ''} select-invalid-style`: `${props.className || ''} `}
  >
      {props.children}
    </SelectStyles>
    <AcceptanceCriteria
      show={selectIsInvalid || props.showAcceptanceCriteria || false}
      text={props.acceptanceCriteria || ''}
      error={selectIsInvalid}
    />
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
  id?: string
  /** Select name, required to 'useInputs' hook usage */
  name?: string
  /** Value by default, used in 'useInputs' hook */
  defValue?: string
  /** Allow select 'defValue' prop as value */
  allowDefaultValue?: boolean
  /** Show error styles and trigger error message */
  selectIsInvalid?: boolean
  acceptanceCriteria?: InputProps['acceptanceCriteria']
  showAcceptanceCriteria?: InputProps['showAcceptanceCriteria']

}