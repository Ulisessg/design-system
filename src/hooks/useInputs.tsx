import { useState, ChangeEvent, FocusEvent, useRef } from "react";


function useInputs<InData extends Object>(
  /** A key-value object with inputs "name" property and their default values, PE: { company: 'Lorem Ipsum',  employee: ''} */
  inputs: InData,
  /**
   * Indicates if hook use the browser native "Validity State" API or "onBlur" or "onChange" event
   * 
   * More info: https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
   */
  reportValidity: ReportValidity
): UseInputsReturn<InData> {
  const [inputsData, setInputsData] = useState<InData>(inputs);
  const [inputsErrors, setInputsErrors] = useState<InputsErrors<InData>>(getInputsKeys(inputs))
  const InputsInitialValues = useRef<InData>(inputs)
  
  const restartInputs = (inputName: keyof InData | 'all'): void => {
    if(inputName === 'all') {
      setInputsData(inputs)
      setInputsErrors(getInputsKeys(inputs))
      return
    }
    setInputsData((prev) => ({
      ...prev,
      [inputName]: InputsInitialValues.current[inputName]
    }))
    setInputsErrors((prev) => ({
      ...prev,
      [inputName]: false
    }))
  }

  const verifyInputsNames = (inputName: string) => {
    if (!inputName) throw new Error(`Input must have 'name' property`);
    if (!inputs.hasOwnProperty(inputName))
      throw new Error(
        `Input name does not exist in inputs; input name received: '${inputName}'. input names available: ${JSON.stringify(
          Object.getOwnPropertyNames(inputs),
          null,
          2
        )}`
      );
  }

  const selectIsValid = (select: HTMLSelectElement): boolean => {
    const defaultValue = select.getAttribute('data-default-value')
    console.log(defaultValue);
    console.log(select.value);
    
    
    const dataAllowDefaultValue = select.getAttribute('data-allow-default') as string
    console.log(dataAllowDefaultValue);
    
    if(typeof defaultValue === 'string' && dataAllowDefaultValue === 'false') {
      if(select.value.includes(defaultValue)) {
        return false
      }
      return true
    }
    return true
  }

  const onBlur = (ev: InputBlurEvent): void => {    
    const validity = reportValidity as ReportValidityObject
    const element = ev.currentTarget
    verifyInputsNames(ev.target.name)
    

    if(reportValidity === true || validity.onBlur === true) {
      let isValid: boolean = element.checkValidity()
      if(element.tagName === 'SELECT') {
        isValid = selectIsValid(ev.target as HTMLSelectElement)        
      }
      element.reportValidity()
      setInputsErrors((prev) => ({
        ...prev,
        [ev.target.name]: !isValid
      }))
    }
  }

  function onChange({ target ,currentTarget }: InputChangeEvent) {
    const inputName = currentTarget.name;
    verifyInputsNames(inputName)

    const inputValue = currentTarget.value;
    setInputsData({
      ...inputsData,
      [inputName]: inputValue,
    });

    const valid: ReportValidityObject = reportValidity as ReportValidityObject 
    if(reportValidity === true || valid.onChange === true) {
      let isValid: boolean = currentTarget.checkValidity()
      if(currentTarget.tagName === 'SELECT') {
        isValid = selectIsValid(target as HTMLSelectElement)
      }
      currentTarget.reportValidity()
      setInputsErrors((prev) => ({
        ...prev,
        [inputName]: !isValid
      }))
    } 
  }

  return {
    inputsErrors,
    inputsData,
    onChange,
    onBlur,
    restartInputs
  };
}

const getInputsKeys = (inputs: any): any => {
  let keys: any = {}
  Object.keys(inputs).forEach((key) => keys[key] = false)
  return keys
}

type InputChangeEvent = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>;
type InputBlurEvent = FocusEvent<HTMLInputElement> | FocusEvent<HTMLSelectElement>

interface UseInputsReturn<IData> {
  inputsData: IData;
  onChange: (e: InputChangeEvent) => void;
  /** Executes inputs validations onBlur event */
  onBlur: (e: InputBlurEvent) => void
  /** inputs validations results */
  inputsErrors: InputsErrors<IData>
  /** Restart all inputs or just one, input must have 'value' prop with 'inputsData' */
  restartInputs: (inputName: keyof IData | 'all') => void
}

type InputsErrors<T> = {[k in keyof T]: boolean}

/**
 * Indicates if hook use the browser native "Validity State" API or "onBlur" event or "onChange" event
 * 
 * More info: https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
 */
type ReportValidity = boolean | ReportValidityObject

type ReportValidityObject = {
  onChange: boolean
  onBlur: boolean
}

export default useInputs;
