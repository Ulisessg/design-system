import React, { forwardRef } from 'react'
import styled from 'styled-components'

const Details = forwardRef<HTMLDetailsElement, DetailsProps>(function Details({ summary, children, ...props }, ref) {

return <>
<Container>
  <DetailsStyles {...props} ref={ref}>
    <Summary>{summary}</Summary>
    <ChildrenContainer>
      {children}
    </ChildrenContainer>
  </DetailsStyles>
</Container>
</>
})

export interface DetailsProps extends ComponentProps<'details'> {
  /** Text showed in 'summary' html tag */
  summary: string
  children: React.ReactNode
}

const Container = styled.div`
  display: grid;
  width: 90%;
  justify-items: center;
`
const DetailsStyles = styled.details`
  border-radius: 8px;
  padding: ${({theme}) => theme.spacing}px;
  border: 1px solid ${({ theme }) => theme.colors.dark1};
  margin: ${({theme}) => theme.spacing * 3}px 0px;
  width: 100%;
`

const Summary = styled.summary`
  padding: ${({theme}) => theme.spacing / 2}px;
  margin: ${({theme}) => theme.spacing}px;
  &:focus, &:hover {
    cursor: pointer;
  }
`
const ChildrenContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: ${({theme}) => theme.spacing * 3}px;
`

export default Details
