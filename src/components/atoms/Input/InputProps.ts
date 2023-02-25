export interface InputElement extends ComponentProps<'input'> {
  /** Label text for 'label' element */
  label: string;
  /** Input id, used for htmlFor prop in label */
  id: string;
  /** Input name */
  name: string;
}

export interface InputProps extends InputElement {
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
    labelProps?: ComponentProps<'label'>
}
