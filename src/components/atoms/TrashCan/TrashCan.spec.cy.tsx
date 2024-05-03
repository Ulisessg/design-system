import TrashCan from './TrashCan';

describe("Trash Can - Atoms", () => {
  it("Should render properly", () => {
    cy.mount(<TrashCan height={40} width={40} title='Delete message' />)
    cy.get('button[title="Delete message"]')
    cy.get("button").invoke("outerWidth").should("eq", 40)
    cy.get("button").invoke("outerHeight").should("eq", 40)
    const btn =  cy.get("button")
  })
})