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
  color: ${({error, theme}) =>error ? theme.colors.error: theme.colors.dark2};
`

interface AcceptanceCriteriaProps extends ComponentProps<'samp'> {
  show: boolean
  text: string
  error: boolean
}

export default AcceptanceCriteria