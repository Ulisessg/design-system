import React, {  forwardRef } from 'react'
import styled from 'styled-components'

export default forwardRef<HTMLTableCellElement,TdProps>(function Td(props, ref) {
  return <TdStyles {...props} ref={ref}></TdStyles>
})


export interface TdProps extends ComponentProps<'td'>{
  
}

const TdStyles = styled.td`
  text-align: center;
`