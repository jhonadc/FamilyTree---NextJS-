describe('Load HomePage', () => {
  it('finds the content "type"', () => {
    cy.visit('https://family-tree-jhonathan-campos.vercel.app/');

    cy.contains('generations');
  });
});

describe('About page renders and link works', () => {
  it('clicks the link "About"', () => {
    cy.visit('https://family-tree-jhonathan-campos.vercel.app/');

    cy.contains('About').click();
    cy.url().should('include', '/about');
  });
});

describe('Features page renders and link works', () => {
  it('clicks the link "Features"', () => {
    cy.visit('https://family-tree-jhonathan-campos.vercel.app/');

    cy.contains('Features').click();
    cy.url().should('include', '/features');
  });
});

describe('Enter buttons renders', () => {
  it('clicks the link "Enter"', () => {
    cy.visit('https://family-tree-jhonathan-campos.vercel.app/');

    cy.contains('Enter').click();
  });
});

describe('Connection with GitHub OAuth is active', () => {
  it('clicks the link "Enter"', () => {
    cy.visit('https://family-tree-jhonathan-campos.vercel.app/');

    cy.contains('Enter').click();
    cy.contains('Sign in with GitHub');
  });
});

describe('Mobile menu test', () => {
  context('iphone-5 resolution', () => {
    beforeEach(() => {
      cy.viewport('iphone-5');
    });
    describe('Visit main page', () => {
      it('Should visit home page', () => {
        cy.visit('https://family-tree-jhonathan-campos.vercel.app/');
      });
      describe('Test Mobile Menu', () => {
        it('Should open mobile menu', () => {
          cy.get('svg').click();
        });
        describe('nav', () => {
          it('Mobile menu renders, click works and renders proper destiny page', () => {
            cy.contains('About').click({ force: true });
            cy.url().should('include', '/about');
          });
        });
      });
    });
  });
});
