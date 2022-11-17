import React from "react";
import styled from "styled-components";
import { TextInput } from "../atoms/Input";
import randomIdNumber from "../../utils/randomIdNumber";
import Button from "../atoms/Button";
import { ButtonProps } from "../atoms/Button";
import { TextInputProps } from "../atoms/Input/InputProps";

function SearchBar({
  label,
  id,
  buttonText,
  onClick,
  onChange,
  placeholder,
  inputProps,
  buttonProps,
}: SearchBarProps) {
  const randomId = randomIdNumber()
  return (
    <SearchBarStyles>
      <TextInput
        {...inputProps}
        type="search"
        inputMode="search"
        name="searchbar"
        label={label}
        placeholder={placeholder}
        onChange={onChange}
        id={`${id}-${randomId}`}
      />
      <Button
        {...buttonProps}
        colorMessage="continue"
        size="small"
        text={buttonText}
        type="button"
        onClick={onClick}
      />
    </SearchBarStyles>
  );
}

const SearchBarStyles = styled.div`
  display: flex;
  align-items: flex-end;

  & button {
    margin-left: 20px;
  }
  & input {
    margin-bottom: 0;
  }
`;

type SearchBarProps = {
  /** Label text for 'label' element */
  label: string;
  /** Input id, used for htmlFor prop in label */
  id: string;
  /** Text for button */
  buttonText: string;
  /** Input placeholder */
  placeholder: string;
  /** Html button element props */
  buttonProps?: ButtonProps;
  /** Html input element props */
  inputProps?: TextInputProps;
  onClick?: ButtonProps["onClick"];
  onChange?: TextInputProps["onChange"];
};

export default SearchBar;
