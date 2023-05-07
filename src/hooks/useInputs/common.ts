// Common functions and types across web and react native

export const verifyInputsNames = <T extends Object>(inputName: string, inputsData: T) => {
  if (!inputName) throw new Error(`Input must have 'name' property`);
  if (!inputsData.hasOwnProperty(inputName))
    throw new Error(
      `Input name does not exist in inputs; input name received: '${inputName}'. input names available: ${JSON.stringify(
        Object.getOwnPropertyNames(inputsData),
        null,
        2
      )}`
    );
}

/**  */
export const getInitialInputsErrors = <T>(inputs: T): Record<keyof T, boolean> => {
  if(typeof inputs !== 'object' || inputs === null) throw new Error('Inputs parameter must be an object')
  let inputsErrors: Record<keyof T, boolean> = {

  } as any
  Object.keys(inputs).forEach((key) => {
    // Avoid security risks
    if (key === 'constructor' && typeof inputs[key] === 'function') {
      throw new Error('Invalid key')
    }
  
    if (key === '__proto__') {
      throw new Error('Invalid key')
    }

    inputsErrors[key as keyof T] = false
  })

  return inputsErrors 
}

