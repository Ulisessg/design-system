import React, {  forwardRef } from 'react'
import { ComponentProps } from '../../lib'
import styled from 'styled-components'

export default forwardRef<HTMLTableCellElement, ComponentProps<'td'>>(function Td(props, ref) {
  return <TdStyles {...props} ref={ref}></TdStyles>
})


const TdStyles = styled.td`
  text-align: center;
`