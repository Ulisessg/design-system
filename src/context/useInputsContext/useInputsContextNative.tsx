import React, {FC, ReactNode, createContext} from 'react';
import useInputs, {
  TReportValidity,
  TonChangeTextCallback,
  UseInputsNativeReturn 
} from '../../hooks/useInputs/useInputsNative'

const initialState: UseInputsContextState = {
  addInput: () => {
    //
  },
  formIsValid: false,
  inputsData: {},
  InputsInitialValues: new Map(),
  inputsErrors: {}as any,
  onBlur: () => {
    //
  },
  onChangeText: () => {
    //
  },
  removeInput: () => {
    //
  },
  restartInputs: () => {

  },
  updateInitialValue: () => {
    
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
  initialInputs: UseInputsNativeReturn<any>['inputsData']
  reportValidity: TReportValidity
  onChageCallback: TonChangeTextCallback
}