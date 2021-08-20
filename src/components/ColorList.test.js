import React from 'react'
import MutationObserver from 'mutationobserver-shim'

import { render, screen} from "@testing-library/react"
import ColorList from './ColorList'

const testColors = [
  { 
    code: { hex: '#ff0000' }, 
    color: 'Red', 
    id: 1 
  },
  { 
    code: { hex: '#fff' }, 
    color: 'White', 
    id: 2 
  },
  { 
    code: { hex: '#0011ff' }, 
    color: 'Blue', 
    id: 3 
  },
]

test("Renders an empty list of colors without errors", () => {
  render(<ColorList colors={[]} />)
})

test("Renders a list of colors without errors", () => {
  render(<ColorList colors={testColors} />)
  const colors = screen.getAllByTestId('color')
  expect(colors).toHaveLength(3)
})

test("Renders the EditForm when editing = true and does not render EditForm when editing = false", () => {
  const { rerender } = render(<ColorList colors={testColors} editing={true} />)
  let editForm = screen.queryByText("edit color")
  expect(editForm).toBeInTheDocument()

  rerender(<ColorList colors={testColors} editing={false} />)
  editForm = screen.queryByText("edit color")
  expect(editForm).not.toBeInTheDocument()
})
