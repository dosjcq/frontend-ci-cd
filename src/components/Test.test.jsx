import { render, screen } from '@testing-library/react'
import Test from './Test.jsx'

test('renders the correct text', () => {
  render(<Test name="World" />)
  expect(screen.getByText('Hello, World!')).toBeInTheDocument()
})
