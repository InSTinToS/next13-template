import Link from 'next/link'

describe('Link', () => {
  it('should has correct children', () => {
    cy.mount(<Link href='/'>Link children</Link>)
    cy.get('a').should('contain', 'Link children')
  })
})
