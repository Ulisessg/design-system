import React, {  forwardRef } from 'react'

import styled from 'styled-components'

const TitleStyles = styled.h1`
  margin: 30px 0px;
  text-align: center;
`

export default forwardRef<HTMLHeadingElement,TitleProps>(function Title(props, ref) {
  return <TitleStyles {...props} ref={ref}>
    {props.children}
  </TitleStyles>
})

export interface TitleProps extends ComponentProps<'h1'> {

}