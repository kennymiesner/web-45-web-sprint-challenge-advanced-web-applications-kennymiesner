import React from 'react'
import MutationObserver from 'mutationobserver-shim'

import { render, screen, waitFor } from "@testing-library/react"
import BubblePage from './BubblePage'
import fetchColorService from './../services/fetchColorService'
jest.mock("./../services/fetchColorService")

const testColors = [
  { 
    code: { hex: "#ff0000" }, 
    color: "Red", 
    id: 1 
  },
  { 
    code: { hex: "#fff" }, 
    color: "White", 
    id: 2 
  },
  { 
    code: { hex: "#0011ff" }, 
    color: "Blue", 
    id: 3 
  },
]

test("Renders without errors", () => {
  fetchColorService.mockResolvedValueOnce(testColors)
  render(<BubblePage />)
})

test("Renders appropriate number of colors passed in through mock", async () => {
  // Keep in mind that our service is called on mount for this component.
  fetchColorService.mockResolvedValueOnce(testColors)
  render(<BubblePage />)
  const colors = await screen.findAllByTestId('color')
  await waitFor(() => {
    expect(colors).toHaveLength(3)
  })
})