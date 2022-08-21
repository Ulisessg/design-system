import { useState, ChangeEvent } from "react";

function useInputs<InData extends Object>(
  inputs: InData
): UseInputsReturn<InData> {
  const [inputsData, setInputsData] = useState<InData>(inputs);

  function onChange({ currentTarget }: InputChangeEvent) {
    const inputName = currentTarget.name;
    if (!inputName) throw new Error(`Input must have 'name' property`);
    if (!inputs.hasOwnProperty(inputName))
      throw new Error(
        `Input name does not exist in inputs; input name received: '${inputName}'. input names available: ${JSON.stringify(
          Object.getOwnPropertyNames(inputs),
          null,
          2
        )}`
      );

    const inputValue = currentTarget.value;

    setInputsData({
      ...inputsData,
      [inputName]: inputValue,
    });
  }

  return {
    inputsData,
    onChange,
  };
}

type InputChangeEvent = ChangeEvent<HTMLInputElement>;

interface UseInputsReturn<IData> {
  inputsData: IData;
  onChange: (e: InputChangeEvent) => void;
}

export default useInputs;
