import styled from 'styled-components'
import { commonAcceptanceCriteriaStyles } from '../Input/InputStyles'
import { FC } from 'react'

const AcceptanceCriteria: FC<AcceptanceCriteriaProps> = (args) => {
  return <AcceptanceCriteriaStyles {...args} aria-hidden={true}>
    {args.text}
  </AcceptanceCriteriaStyles>
}
 const AcceptanceCriteriaStyles = styled.samp<AcceptanceCriteriaProps>`
  ${commonAcceptanceCriteriaStyles}
  visibility: ${({show}) => show ? 'initial' : 'hidden' };
`

interface AcceptanceCriteriaProps extends ComponentProps<'samp'> {
  show: boolean
  text: string
}

export default AcceptanceCriteria