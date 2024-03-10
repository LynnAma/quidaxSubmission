import { FormsPage } from "../../support/pages/index";


const formPage = new FormsPage();
const inputText = "Quidax Test";
const firstValue = 5;
const secondValue = 6;
const sumOfEntries = 11;
const weekDay = "Monday";
const firstCity = "California";
const secondCity = "Florida";
describe('Input Form', () => {

  beforeEach( () => {
    formPage.accessWebPage();
  })

  it('Test that the a user is able to view the text inputted in the single input field', () => {
    formPage.accessSimpleInputForm();
    formPage.inputTextInField(inputText);
    formPage.clickShowMessageButton();
    cy.get(`span[title="text message"]`).contains(inputText).should('be.visible');
  })

  it('Test that the a user is able to view the sum of numbers inputted in the two input fields', () => { 
    formPage.accessTwoInputFields();
    formPage.getSumOfValues(firstValue,secondValue);
    cy.get(`span[id="displayvalue"]`).contains(sumOfEntries).should('be.visible');
  })

  it('Test that the a user is able to view the selected day of the week from the Select List Demo section', () => { 
    formPage.accessSelectListDemo();
    formPage.selectDayFromList(weekDay)
    cy.get(`p[class="selected-value"]`).contains(weekDay).should('be.visible');
  })

  it('Test that the a user is able to view the selected locations from the Multi Select List Demo section', () => { 
   formPage.accessMultipleListDemo();
    formPage.selectCity(firstCity);
    cy.get('.getall-selected').contains(firstCity).should('be.visible');
  })


})

