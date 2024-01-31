import React, { type FC } from 'react'
import { type ButtonWebProps } from '../Button/Props'
import styled from 'styled-components'

const TrashCan: FC<TrashCanProps> = (buttonProps) => (
    <TrashCanStyles
      {...buttonProps}
      aria-label={buttonProps.title}
      type={buttonProps.type ?? 'button'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={buttonProps.width}
        height={buttonProps.height}
        viewBox="0 0 256 256">
        <path
          // eslint-disable-next-line max-len
          d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z">
        </path>
      </svg>
    </TrashCanStyles>
)

const TrashCanStyles = styled.button<TrashCanProps>`
  display: flex;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  fill: black;
  &:hover, &:focus {
    fill: red;
    outline: 2px solid black;
    border-radius: 2px;
  };
`

interface TrashCanProps extends Omit<ButtonWebProps, 'colorMessage' | 'text' | 'size'> {
  title: string
  width: number
  height: number
}

export default TrashCan
