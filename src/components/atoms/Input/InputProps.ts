import { TextInputProps } from 'react-native/types';

export interface InputProps {
  /** Label text for 'label' element */
  label: string;
  /** Input id, used for htmlFor prop in label */
  id: string;
  /** Input name */
  name: string;
  /**
   * Requeriments to fill input, such as:
   * 
   * - Only numbers
   * 
   * - Only letters and spaces
   */
    acceptanceCriteria?: string
    /** Change input border color if is invalid, by default "false" */
    inputInvalid?: boolean
    /** 
     * Regexp to validate users data.
     * 
     * If you are using Input for React Native you MUST to specify the flags, otherwise no required
     *
     */
    pattern?: string

    required?: boolean
}

export type InputWebProps  = ComponentProps<'input'> & InputProps & {

  labelProps?: ComponentProps<'label'>
}

export type InputNativeProps = TextInputProps & InputProps & {

}