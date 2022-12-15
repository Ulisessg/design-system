import React, { forwardRef } from 'react'
import styled from 'styled-components'
import type { ComponentProps } from '../../lib'

const ThStyles = styled.th`
  text-align: center;
`

export default forwardRef<HTMLTableCellElement, ComponentProps<'th'>>(function Th(props, ref) {
  return <ThStyles {...props} ref={ref}>{props.children}</ThStyles>
})
