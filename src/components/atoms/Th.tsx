import React, { forwardRef } from 'react'
import styled from 'styled-components'


const ThStyles = styled.th`
  text-align: center;
`

export default forwardRef<HTMLTableCellElement, ThProps>(function Th(props, ref) {
  return <ThStyles {...props} ref={ref}>{props.children}</ThStyles>
})

export interface ThProps extends ComponentProps<'th'>{
  
}