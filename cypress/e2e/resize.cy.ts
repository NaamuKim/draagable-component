describe('resize', () => {
  const BOX_SIZE = 200;

  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.viewport(800, 600);
  });
  it('Make Draggable area cannot overflow current window', () => {
    cy.get('[data-cy=area-size]').should('have.text', 'width: 800 height: 600');
  });
  it('is box in the middle', () => {
    const viewportWidth = 500;
    const viewportHeight = 300;
    cy.viewport(viewportWidth, viewportHeight);
    const top = viewportHeight / 2 - BOX_SIZE / 2 + 'px';
    const left = viewportWidth / 2 - BOX_SIZE / 2 + 'px';
    cy.get('[data-cy=box]').should('have.css', 'top', top);
    cy.get('[data-cy=box]').should('have.css', 'left', left);
  });
});
