import { FormsPage, AlertsPasge } from "../../support/pages/index";

const formPage = new FormsPage();
const alertPage = new AlertsPasge();
const alertText = `I'm an autocloseable success  message. I will hide in 5 seconds.`;
const modalMessage = `This is the place where the content for the modal dialog displays`;
const modalText = "Click launch modal button to launch second modal.";
const secondCity = "Florida";

describe('Alert and Models', () => {
  beforeEach( () => {
   formPage.accessWebPage();
  })

  it(`Test that the a user is able to view the bootsrap message linked with the 'Autocloseable success mess' button`, () => {
    alertPage.accessBootStrapAlert();
    cy.get('.alert-autocloseable-success', { timeout: 5000 }).should('contain', alertText);
  })

  it(`Test that the a user is able to view the single bootsrap modal after clicking the 'Launch Modal' button in the Single Modal Section`, () => {
    alertPage.accessBoostrapModal(modalMessage);
    cy.get('[id="name-and-slogan"]').should('be.visible');
  })

  it(`Test that the a user is able to view the multiple bootsrap modal after clicking the 'Launch Modal' button in the Multiple Modal Section`, () => {
    alertPage.accessBoostrapMultipleModals(modalText,modalMessage)
    cy.get('[id="name-and-slogan"]').should('be.visible');
  })

})

