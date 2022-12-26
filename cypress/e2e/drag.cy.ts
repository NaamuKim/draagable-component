const BOX_SIZE = 200;
describe('drag', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.viewport(800, 600);
  });
  it('move box', () => {
    const clientX = 200;
    const clientY = 200;
    const left = clientX - BOX_SIZE / 2 + 'px';
    const top = clientY - BOX_SIZE / 2 + 'px';
    cy.get('[data-cy=box]')
      .trigger('mousedown')
      .wait(100)
      .trigger('mousemove', {
        clientX,
        clientY,
      })
      .trigger('mouseup', { force: true })
      .should('have.css', 'top', top)
      .should('have.css', 'left', left);
  });
});

it('prevent to move box outside', () => {
  cy.visit('http://localhost:3000');
  const clientX = -1000;
  const clientY = -1000;
  cy.get('[data-cy=box]')
    .trigger('mousedown')
    .wait(100)
    .trigger('mousemove', {
      clientX,
      clientY,
    })
    .trigger('mouseup', { force: true })
    .should('have.css', 'top', '0px')
    .should('have.css', 'left', '0px');
});
