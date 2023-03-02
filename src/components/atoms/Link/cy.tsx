import Link from 'next/link'

describe('Link', () => {
  it('should have correct children', () => {
    cy.mount(<Link href='/'>Link children</Link>)
    cy.get('a').should('contain', 'Link children')
  })
})
