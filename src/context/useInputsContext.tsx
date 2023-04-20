import React, {FC, ReactNode, createContext} from 'react';
import useInputs, { ReportValidity, TOnChangeCallBack } from '../hooks/useInputs'

const initialState: UseInputsContextState = {
  addInput: () => {
    //
  },
  formIsValid: false,
  inputsData: {},
  inputsErrors: {}as any,
  onBlur: () => {
    //
  },
  onChange: () => {
    //
  },
  removeInput: () => {
    //
  },
  restartInputs: () => {

  }
}

export const UseInputsContext = createContext(initialState)

export const UseInputsContextProvider: FC<UseInputsContextProps> = ({
  children,
  initialInputs,
  onChageCallback,
  reportValidity,
}) => {
  const UseInputsReturn = useInputs(
    initialInputs,
    reportValidity,
    onChageCallback
  )


  return <UseInputsContext.Provider value={UseInputsReturn}>
    {children}
  </UseInputsContext.Provider>
}

interface UseInputsContextState extends ReturnType<typeof useInputs> {
}

export interface UseInputsContextProps {
  children: ReactNode
  initialInputs: Record<string, string>
  reportValidity: ReportValidity
  onChageCallback: TOnChangeCallBack
}