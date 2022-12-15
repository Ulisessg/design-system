import { useState, ChangeEvent, FocusEvent, useRef } from "react";

function useInputs<InData extends Object>(
  inputs: InData,
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

  const onBlur = (ev: FocusEvent<HTMLInputElement>): void => {
    verifyInputsNames(ev.target.name)
    const validity = reportValidity as ReportValidityObject    
    if(reportValidity === true || validity.onBlur === true) {
      ev.currentTarget.checkValidity()
      ev.currentTarget.reportValidity()
      setInputsErrors((prev) => ({
        ...prev,
        [ev.target.name]: true
      }))
    }
  }

  function onChange({ currentTarget }: InputChangeEvent) {
    const inputName = currentTarget.name;
    verifyInputsNames(inputName)

    const inputValue = currentTarget.value;
    setInputsErrors((prev) => ({
      ...prev,
      [inputName]: !currentTarget.checkValidity()
    }))
    setInputsData({
      ...inputsData,
      [inputName]: inputValue,
    });

    let valid: ReportValidityObject = reportValidity as ReportValidityObject 
    if(reportValidity === true || valid.onChange === true) {
      currentTarget.checkValidity()
      currentTarget.reportValidity()
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

type InputChangeEvent = ChangeEvent<HTMLInputElement>;
type InputBlurEvent = FocusEvent<HTMLInputElement>

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

type ReportValidity = boolean | ReportValidityObject
type ReportValidityObject = {
  onChange: boolean
  onBlur: boolean
}

export default useInputs;
