import React, { FC, forwardRef } from 'react'
import styled from 'styled-components'

const Details = forwardRef<HTMLDetailsElement, DetailsProps>(function Details({ summary, children, ...props }, ref) {

return <>
<Container>
  <DetailsStyles {...props} ref={ref}>
    <Summary>{summary}</Summary>
    {children}
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
  width: 100%;
  grid-auto-flow: row;
  justify-items: center;
`
const DetailsStyles = styled.details`
  border-radius: 8px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.dark1};
  margin: 20px 0px;
  width: 90%;
`

const Summary = styled.summary`
  details[open] & summary {
    margin-bottom: 30px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dark1};;
    padding-bottom: 20px;
    width: 90%;
  }
  margin-bottom: 5px;
  &:focus, &:hover {
    cursor: pointer;
  }
`

export default Details
