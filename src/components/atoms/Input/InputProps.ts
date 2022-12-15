import { ComponentProps } from '../../../lib';


export interface InputElement extends ComponentProps<'input'> {
  /** Label text for 'label' element */
  label: string;
  /** Input id, used for htmlFor prop in label */
  id: string;
  /** Input name */
  name: string;
  /** Keyboard input mode, mainly for mobile keyboards */
  inputMode:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";
}

export interface TextInputProps extends InputElement {
  /** defines information field type */
  type:
    | "text"
    | "date"
    | "datetime-local"
    | "email"
    | "password"
    | "tel"
    | "url"
    | "search";
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
}

export interface FileInputProps extends InputElement {
  /** defines information field type */
  type: "file" | "image";
  /** File extensions accepted */
  accept: "image/*" | ".pdf";
}
