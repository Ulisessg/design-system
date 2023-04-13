import React, { forwardRef } from "react";
import styled from "styled-components";
import { Input } from "../atoms/Input";
import randomIdNumber from "../../utils/randomIdNumber";
import Button from "../atoms/Button";
import { ButtonProps } from "../atoms/Button";
import { InputProps } from "../atoms/Input/InputProps";


export default forwardRef<HTMLDivElement, SearchBarProps>(function SearchBar({
  label,
  id,
  buttonText,
  onClick,
  onChange,
  placeholder,
  inputProps,
  buttonProps,
  ...rest
}, ref) {
  const randomId = randomIdNumber()
  return (
    <SearchBarStyles {...rest} ref={ref}>
      <Input
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
})

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

export interface SearchBarProps extends Omit<ComponentProps<'div'>, 'onClick' | 'onChange'> {
  /** Label text for 'label' element */
  label: string;
  /** Input id, used for htmlFor prop in label */
  id: string;
  /** Text for button */
  buttonText: string;
  /** Input placeholder, not recommendable for accessibility proposes */
  placeholder?: string;
  /** Html button element props */
  buttonProps?: ButtonProps;
  /** Html input element props */
  inputProps?: ComponentProps<'input'> & Pick<InputProps, 'acceptanceCriteria' | 'inputInvalid'>;
  onClick?: ButtonProps["onClick"];
  onChange?: InputProps["onChange"];
};
