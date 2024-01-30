import { TextInputProps } from 'react-native/types';

export interface InputProps {
  /** Label text for 'label' element */
  label: string;
  /** Input id, used for htmlFor prop in label */
  id?: string;
  /** Input name */
  name?: string;
  /**
   * Display a message about how to fill input as:
   * 
   * - Only numbers
   * 
   * - Only letters and spaces
   * 
   */
    acceptanceCriteria?: string
    /**
     * Force show 'acceptanceCriteria'
     */
    showAcceptanceCriteria?: boolean
    /** Change input border color if is invalid, by default "false" */
    inputInvalid?: boolean
    /** 
     * Regexp to validate users data.
     * 
     * If you are using Input for React Native you MUST to specify the flags, otherwise no required
     *
     */

    required?: boolean
}

export type InputWebProps  = ComponentProps<'input'> & InputProps & {

  labelProps?: ComponentProps<'label'>
}

export type InputNativeProps = TextInputProps & Omit<InputProps, 'name'> & {

}