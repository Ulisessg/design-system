import { InputHTMLAttributes } from "react";

export interface InputElement extends InputHTMLAttributes<HTMLInputElement> {
  /** Label text for 'label' element */
  label: string;
  /** Input id, used for htmlFor prop in label */
  id: string;
  /** Input placeholder */
  placeholder: string;
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
}

export interface FileInputProps extends InputElement {
  /** defines information field type */
  type: "file" | "image";
  /** File extensions accepted */
  accept: "image/*" | ".pdf";
}
