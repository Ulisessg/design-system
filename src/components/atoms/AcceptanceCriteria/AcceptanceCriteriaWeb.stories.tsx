import type {Meta, StoryObj} from '@storybook/react'
import AcceptanceCriteria from './AcceptanceCriteriaWeb'
import useInputs from '../../../hooks/useInputs/useInputsWeb'
import InputWeb from '../Input/InputWeb'
import { onlyLettersAndSpacesPattern } from '../../../utils/constants'

const meta: TMeta = {
  component: AcceptanceCriteria,
  args: {
    show: true,
    text: 'Solo letras y espacios'
  }
}
export default meta
export const Primary: Story = {

}

export const AcceptanceCriteriaInInput: Story = {
  render: (args) => {
    const {
      inputsData, 
      onChange, 
      onBlur,
      inputsErrors
    // eslint-disable-next-line react-hooks/rules-of-hooks
    } = useInputs({
      username: ''
    }, true)
    return <InputWeb
      name='username'
      label='Username'
      value={inputsData.username}
      onChange={onChange}
      onBlur={onBlur}
      inputInvalid={inputsErrors.username}
      showAcceptanceCriteria={args.show}
      acceptanceCriteria={args.text}
      pattern={onlyLettersAndSpacesPattern}
    />
  }
}

type TAcceptanceCriteria = typeof AcceptanceCriteria
type TMeta = Meta<TAcceptanceCriteria>
type Story = StoryObj<TAcceptanceCriteria>