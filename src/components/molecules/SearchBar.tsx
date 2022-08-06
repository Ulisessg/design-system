import React from "react";
import styled from "styled-components";
import { TextInput } from "../atoms/Input";
import randomIdNumber from "../../utils/randomIdNumber";
import Button from "../atoms/Button";

function SearchBar({ label, id, buttonText }: SearchBarProps) {
  return (
    <SearchBarStyles>
      <TextInput
        id={`${id}-${randomIdNumber()}`}
        label={label}
        type="text"
        placeholder="Nombre del libro"
      />
      <Button
        colorMessage="continue"
        size="small"
        text={buttonText}
        type="button"
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
};

export default SearchBar;
