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
  return (
    <SearchBarStyles>
      <TextInput
        {...inputProps}
        id={`${id}-${randomIdNumber()}`}
        label={label}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
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
  label: string;
  id: string;
  buttonText: string;
  placeholder: string;

  buttonProps?: ButtonProps;
  inputProps?: TextInputProps;
  onClick?: ButtonProps["onClick"];
  onChange?: TextInputProps["onChange"];
};

export default SearchBar;
