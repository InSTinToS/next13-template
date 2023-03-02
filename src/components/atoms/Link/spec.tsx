import Link from '.'

import { render, screen } from '@testing-library/react'
import React from 'react'

describe('Link', () => {
  it('should has correct children', () => {
    render(<Link href='/'>Link children</Link>)

    expect(screen.getByRole('link')).toBeInTheDocument()
  })
})
