import React, {  forwardRef } from 'react'

import styled from 'styled-components'

const TitleStyles = styled.h1`
  margin: 30px 0px;
  text-align: center;
`

export default forwardRef<HTMLHeadingElement, ComponentProps<'h1'>>(function Title(props, ref) {
  return <TitleStyles {...props} ref={ref}>
    {props.children}
  </TitleStyles>
})