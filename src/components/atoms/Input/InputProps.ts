import { InputHTMLAttributes } from "react";

export interface InputElement extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export interface TextInputProps extends InputElement {
  type:
    | "text"
    | "date"
    | "datetime-local"
    | "email"
    | "password"
    | "tel"
    | "url";
}

export interface FileInputProps extends InputElement {
  type: "file" | "image";
  accept: "image/*" | ".pdf";
}
