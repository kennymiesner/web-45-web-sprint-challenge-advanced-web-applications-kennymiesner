import React from 'react'
import MutationObserver from 'mutationobserver-shim'

import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Color from './Color'

const testColor = { 
  code: { hex: '#000' }, 
  color: 'Black', 
  id: 0 
}

test("Renders without errors with blank color passed into component", () => {
  render(<Color color={testColor} />)
})
  
test("Renders the color passed into component", () => {
  render(<Color color = {testColor} />);
  const color = screen.getByText('Black')
  expect(color).toBeInTheDocument()
})

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
  const mockHandleDelete = jest.fn()
  const mockToggleEdit = jest.fn()
  render (<Color color={testColor} deleteColor = {mockHandleDelete} toggleEdit = {mockToggleEdit} />)
  const deleteBtn = screen.getByTestId("delete")
  userEvent.click(deleteBtn)
  expect(mockHandleDelete).toBeCalledTimes(1)
  expect(mockToggleEdit).toBeCalledTimes(1)
})

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
  const mockSetEditColor = jest.fn()
  const mockToggleEdit = jest.fn()
  render (<Color color={testColor} setEditColor = {mockSetEditColor} toggleEdit = {mockToggleEdit} />)
  const colorDiv = screen.getByTestId('color')
  userEvent.click(colorDiv)
  expect(mockSetEditColor).toBeCalledTimes(1)
  expect(mockToggleEdit).toBeCalledTimes(1)
})