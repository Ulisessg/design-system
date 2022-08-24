import React from 'react'
import { render, screen } from '@testing-library/react'
import Test from '../../pages/test'

describe('Test', () => {
  it('renders a Text', () => {
    render(<Test />)

    const Text = screen.getByText<HTMLParagraphElement>('Test')

    expect(Text).toBeInTheDocument()
    expect(Text.textContent).toStrictEqual("Test")
  })
})