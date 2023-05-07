import { useRef, useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { getInitialInputsErrors, verifyInputsNames } from './common'
import { UseInputsReturn } from './useInputsWeb'

function useInputsNative<InData extends {[k: string]:  {
  value: string,
  pattern?: RegExp,
  minLength?: number
  maxLenght?: number,
}}>(
  inputs: InData,
  reportValidity: TReportValidity,
  onChangeTextCallback?: TonChangeTextCallback,
  formIsDefaultValid?: boolean
): UseInputsNativeReturn<InData> {
  const InputsInitialValues = useRef<Map<string, {  value: string,  pattern?: RegExp}>>(new Map(Object.entries(inputs as any)))
  const [formIsValid, setFormIsValid] = useState<boolean>((() => {
    if(typeof formIsDefaultValid === 'boolean') return formIsDefaultValid
    return false
  })())
  const [inputsData, setInputsData] = useState<InData>(inputs);
  const [inputsErrors, setInputsErrors] = useState<TInputsErrors<InData>>(getInitialInputsErrors(inputs))

  const addInput = (inputName: string, initialValue: string, pattern?: RegExp, minLength?: number, maxLenght?: number) => {
    setInputsData((prev) => ({
      ...prev,
      [inputName]: {
        value: initialValue,
        maxLenght,
        minLength,
        pattern
      }
    }))
    InputsInitialValues.current.set(inputName, {
      value: initialValue,
      pattern
    })
    setInputsErrors((prev) => {
      return {
        ...prev,
        [inputName]: false
      }
    })
  }


  const removeInput = (inputName: string) => {
    
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
      setInputsData(inputs)
      setInputsErrors(getInitialInputsErrors(inputs))
      return
    }
    setInputsData((prev) => ({
      ...prev,
      [inputName]: {
        ...InputsInitialValues.current.get(inputName as string),
      }
    }))
    setInputsErrors((prev) => ({
      ...prev,
      [inputName]: false
    }))
  }

  /** Used in 'onChangeText' and 'onBlur' to check if all inputs are valid */
  const checkInputIsValid = (inputName:string, inputChangedValue: string, pattern?: RegExp): boolean => {
    const currentInput = inputsData[inputName]
    let currentInputIsValid = true
    if(typeof pattern !== 'undefined') {
      const inputValidation = inputChangedValue.match(pattern)
      
      if(inputValidation === null) {
        currentInputIsValid = false
      }
    }

    if(typeof currentInput.minLength !== 'undefined') {
      if(inputChangedValue.length < currentInput.minLength) {
        currentInputIsValid = false
      }
    }
    if(typeof currentInput.maxLenght !== 'undefined') {
      if(inputChangedValue.length > currentInput.maxLenght) {
        currentInputIsValid = false
      }
    }

    /** Form validation */
    if(!currentInputIsValid) {
      setFormIsValid(false)
    } else {
      let otherInputIsInvalid: boolean = false
      for (const inputKey in inputsData) {  
        /** No repeat validation of current input with old value */
        if(inputKey === inputName) continue;
        
        const inputStored = inputsData[inputKey]
        const inputStoredValue = inputStored.value
        const inputStoredMinLenght = inputStored.minLength
        const inputStoredMaxLenght = inputStored.maxLenght

        if(typeof inputStored.pattern !== 'undefined') {
          const patternValidation = inputStored.value.match(inputStored.pattern)
          if(patternValidation === null) {
            otherInputIsInvalid = true
            break;
          }
        }

        if (typeof inputStoredMinLenght !== 'undefined') {
          if(inputStoredValue.length < inputStoredMinLenght)  {
            otherInputIsInvalid = true
            break;            
          }
        }

        if (typeof inputStoredMaxLenght !== 'undefined') {
          if(inputStoredValue.length > inputStoredMaxLenght) {
            otherInputIsInvalid = true
            break;
          }
        }

      }
      setFormIsValid(!otherInputIsInvalid)      
    }

    return currentInputIsValid
  }

  const onBlur: TonBlur = (_ev, inputName): void => {
    const validity: TReportValidity = reportValidity 
    verifyInputsNames(inputName, inputsData)
    
    if(reportValidity === true || (validity as TValidityObject).onBlur === true) {
      const pattern = InputsInitialValues.current.get(inputName)?.pattern as RegExp
      if(typeof pattern === 'undefined') {
        console.warn('No pattern provided')
        return
      }
      const input = inputsData[inputName]
      const inputValue = input.value
      const inputValidity = checkInputIsValid(inputName, inputValue, pattern)
      setInputsErrors((prev) => ({
        ...prev,
        [inputName]: !inputValidity
      }))
    }
  }

  const onChangeText: TonChangeText = (inputValue, inputName)=> {
    verifyInputsNames(inputName, inputsData)
    if (typeof onChangeTextCallback === 'function') {
      inputValue = onChangeTextCallback(inputValue, inputName)
    }

    setInputsData({
      ...inputsData,
      [inputName]: {
        ...inputsData[inputName],
        value: inputValue,
      },
    });


    if(reportValidity === true || (reportValidity as TValidityObject).onChangeText === true) {
      verifyInputsNames(inputName, inputsData)
      const pattern = InputsInitialValues.current.get(inputName)?.pattern as RegExp
      if(typeof pattern === 'undefined') {
        console.warn('No pattern provided')
        return
      }
      const inputValidity = checkInputIsValid(inputName, inputValue, pattern)
      setInputsErrors((prev) => ({
        ...prev,
        [inputName]: !inputValidity
      }))
      
    } 
  }

  return {
    addInput,
    formIsValid,
    inputsData,
    inputsErrors,
    InputsInitialValues: InputsInitialValues as any,
    onBlur,
    onChangeText,
    removeInput,
    restartInputs,
  }
}


export interface UseInputsNativeReturn <T> extends Omit<UseInputsReturn<T>, 'onChange' | 'onBlur' | 'inputsInitialValues'> {
  onChangeText: TonChangeText
  onBlur: TonBlur
  InputsInitialValues: Map<keyof T, {
    value: string,
    pattern?: string
  }>
}

export type TonChangeText = (value: string, inputName: string) => void

export type TonBlur = (ev:NativeSyntheticEvent<TextInputFocusEventData>, inputName: string) => void

export type TonChangeTextCallback = (value: string, inputName: string) => string
export type TInputsErrors<T> = Record<keyof T, boolean>

export type TReportValidity = boolean | TValidityObject

type TValidityObject =  {
  onChangeText: boolean
  onBlur: boolean
}

export default useInputsNative