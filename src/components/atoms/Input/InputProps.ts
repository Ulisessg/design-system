import { InputHTMLAttributes } from "react";

export interface InputElement extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  placeholder: string;
  name: string;
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
  type: "file" | "image";
  accept: "image/*" | ".pdf";
}
