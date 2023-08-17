import { useState, ChangeEvent, FocusEvent, useRef } from "react";
import { getInitialInputsErrors, verifyInputsNames } from './common'


function useInputs<InData extends {[k: string]: string}>(
  /** A key-value object with inputs "name" property and their default values, PE: { company: 'Lorem Ipsum',  employee: ''} */
  inputs: InData,
  /**
   * Indicates if hook use the browser native "Validity State" API or "onBlur" or "onChange" event
   * 
   * More info: https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
   */
  reportValidity: ReportValidity,
  /** Modify the input value before setState */
  onChangeCallback?: TOnChangeCallBack
): UseInputsReturn<InData> {
  const InputsInitialValues = useRef<Map<string, string>>(new Map(Object.entries(inputs as any)))
  const [formIsValid, setFormIsValid] = useState<boolean>(false)
  const [inputsData, setInputsData] = useState<InData>(inputs);
  const [inputsErrors, setInputsErrors] = useState<InputsErrors<InData>>(getInitialInputsErrors(inputs))

  const checkFormValidity: UseInputsReturn<InData>['checkFormValidity'] = (inputToIgnore) => {
    let formValidity: boolean = false

    /**Validate form with first input name */
    for(let inputName in inputsData) {
      if(inputToIgnore === inputName) {
        continue
      } else {
        const input = document.getElementsByName(inputName)[0] as HTMLInputElement
        const form = input.form as HTMLFormElement
        formValidity = form.reportValidity()
  
        break;
      }
    }
    setFormIsValid(formValidity)
    return formValidity
  }

  const addInput: UseInputsReturn<any>['addInput'] = (inputName, initialValue) => {
    setInputsData((prev) => ({
      ...prev,
      [inputName]: initialValue
    }))
    InputsInitialValues.current.set(inputName, initialValue)
    setInputsErrors((prev) => {
      return {
        ...prev,
        [inputName]: false
      }
    })
  }

  const removeInput: UseInputsReturn<any>['removeInput'] = (inputName) => {
    
    if(typeof InputsInitialValues.current.get(inputName) !== 'string') {
      throw new Error(`Input name not exists: ${inputName}`)
    }
    setInputsData((prev) => {
      let {[inputName as keyof typeof inputsData]: inputToRemove, ...rest} = prev
      
      return rest as any
    })
    InputsInitialValues.current.delete(inputName)
  }

  const restartInputs = (inputName: keyof InData | 'all'): void => {
    if(inputName === 'all') {
      const initValues = Object.fromEntries(InputsInitialValues.current) as InData

      setInputsData(initValues)
      setInputsErrors(getInitialInputsErrors(initValues))
      return
    }
    setInputsData((prev) => ({
      ...prev,
      [inputName]: InputsInitialValues.current.get(inputName as string) as string
    }))
    setInputsErrors((prev) => ({
      ...prev,
      [inputName]: false
    }))
  }

  const onBlur = (ev: InputBlurEvent): void => {
    const validity = reportValidity as ReportValidityObject
    const element = ev.currentTarget
    verifyInputsNames(ev.target.name, inputsData)
    

    if(reportValidity === true || validity.onBlur === true) {
      const formValidationResult = getInputAndFormValidity(ev.currentTarget)
      let isValid: boolean = formValidationResult.inputIsValid
      setFormIsValid(formValidationResult.formIsValid)
      element.reportValidity()
      setInputsErrors((prev) => ({
        ...prev,
        [ev.target.name]: !isValid
      }))
    }
  }

  function onChange(ev: InputChangeEvent) {
    const inputName = ev.currentTarget.name;
    verifyInputsNames(inputName, inputsData)

    let inputValue: string = ev.currentTarget.value

    if (typeof onChangeCallback === 'function') {
      inputValue = onChangeCallback(ev, inputValue)
    }

    setInputsData({
      ...inputsData,
      [inputName]: inputValue,
    });

    const valid: ReportValidityObject = reportValidity as ReportValidityObject 
    if(reportValidity === true || valid.onChange === true) {
      const formValidationResult = getInputAndFormValidity(ev.currentTarget)
      let isValid: boolean = formValidationResult.inputIsValid
      setFormIsValid(formValidationResult.formIsValid)
      ev.currentTarget.reportValidity()
      setInputsErrors((prev) => ({
        ...prev,
        [inputName]: !isValid
      }))
    } 
  }

  
  const selectIsValid = (select: HTMLSelectElement): boolean => {
    const defaultValue = select.getAttribute('data-default-value')
    const dataAllowDefaultValue = select.getAttribute('data-allow-default') as string
    
    if(typeof defaultValue === 'string' && dataAllowDefaultValue === 'false') {
      if(select.value.includes(defaultValue)) {
        return false
      }
      return true
    }
    return true
  }

  const getInputAndFormValidity: FGetValidity = (input) => {
    const form = input.form as HTMLFormElement

    const inputIsValid: boolean = (() => {
      if(input.tagName === 'SELECT') {
        return selectIsValid(input as HTMLSelectElement)
      }
      return input.checkValidity()
    })()
    return {
      formIsValid: form?.checkValidity() ?? false,
      inputIsValid: inputIsValid
    }
  }

  const updateInitialValue = (fieldName: keyof InData, newInitialValue: string) => {
    const newInitialValues = new Map(InputsInitialValues.current);
    
    newInitialValues.set(fieldName as any, newInitialValue);
  
    (InputsInitialValues as any).current = newInitialValues;
  }

  const updateInput = (inputName: keyof InData, inputValue: string): void => {
    verifyInputsNames(inputName as any, inputsData)
    setInputsData({
      ...inputsData,
      [inputName]: inputValue,
    })
  }

  return {
    addInput,
    checkFormValidity,
    removeInput,
    formIsValid,
    inputsErrors,
    inputsData,
    inputsInitialValues: InputsInitialValues.current,
    onChange,
    onBlur,
    restartInputs,
    updateInitialValue,
    updateInput
  };
}

type InputChangeEvent = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>;
type InputBlurEvent = FocusEvent<HTMLInputElement> | FocusEvent<HTMLSelectElement>

export interface UseInputsReturn<IData> {
  inputsData: IData;
  onChange: (e: InputChangeEvent) => void;
  /** Executes inputs validations onBlur event */
  onBlur: (e: InputBlurEvent) => void
  /** inputs validations results */
  inputsErrors: InputsErrors<IData>
  /** Restart all inputs or just one, input must have 'value' prop with 'inputsData' */
  restartInputs: (inputName: keyof IData | 'all') => void
  /** Allows you add a new input in hook */
  addInput: (inputName: string, initialValue: string) => void
  /** Allows you remove an input from hook, it throws an error if the input doesn't exists */
  removeInput: (inputName:string) => void

  updateInitialValue: (inputName: keyof IData, newInitialValue: string) => void

  formIsValid: boolean

  inputsInitialValues: Map<string, string>

  updateInput: (inputName: keyof IData, inputValue: string) => void
  /**
   * Re check form validity and update 'formIsValid'
   * @returns {boolean}
   */
  checkFormValidity: (inputToIgnore?: string) => boolean
}

type InputsErrors<T> = Record<keyof T, boolean>

/**
 * Indicates if hook use the browser native "Validity State" API or "onBlur" event or "onChange" event
 * 
 * More info: https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
 */
export type ReportValidity = boolean | ReportValidityObject

type ReportValidityObject = {
  onChange: boolean
  onBlur: boolean
}

type FGetValidity = (input: HTMLInputElement | HTMLSelectElement) => {
  inputIsValid: boolean
  formIsValid: boolean
}

export type TOnChangeCallBack = undefined | ((ev: InputChangeEvent, inputValue: string) => string )
export default useInputs;
