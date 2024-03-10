export class FormsPage{

    accessWebPage(){
        cy.visit('/');
    }

    accessSimpleInputForm(){
    cy.get('[class="dropdown-toggle"]').contains("Input Forms").click();
    cy.get('[class="dropdown-menu"]').contains("Simple Form Demo").click();
    cy.get('[class="panel-heading"]').contains("Single Input Field").should('be.visible');
    }

    inputTextInField(text){
        cy.get(`input[placeholder="Please enter your Message"]`).type(text);
    }

    clickShowMessageButton(){
        cy.get(`button[type="button"]`).contains("Show Message").click();
    }

    accessTwoInputFields(){
        cy.get('[class="dropdown-toggle"]').contains("Input Forms").click();
        cy.get('[class="dropdown-menu"]').contains("Simple Form Demo").click();
        cy.get('[class="panel-heading"]').contains("Two Input Fields").should('be.visible');
    }

    getSumOfValues(firstValue, secondValue){
    cy.get(`input[name="sum1"]`).type(firstValue);
    cy.get(`input[name="sum2"]`).type(secondValue);
    cy.get(`button[type="button"]`).contains("Get Total").click();
    }

    accessSelectListDemo(){
        cy.get('[class="dropdown-toggle"]').contains("Input Forms").click();
        cy.get('[class="dropdown-menu"]').contains("Select Dropdown List").click();
        cy.get('[class="panel-heading"]').contains("Select List Demo").should('be.visible');
    }

    selectDayFromList(selectedDay){
        cy.get('label').contains("Select a day (select one):").should('be.visible');
        cy.get('#select-demo').select(selectedDay);
    }

    accessMultipleListDemo(){
        cy.get('[class="dropdown-toggle"]').contains("Input Forms").click();
        cy.get('[class="dropdown-menu"]').contains("Select Dropdown List").click();
        cy.get('[class="panel-heading"]').contains("Multi Select List Demo").should('be.visible');
    }

    selectCity(firstCity){
        cy.get('p').contains("By clicking on the buttons, you can get value from the list which will display just below the buttons").should('be.visible');
        cy.get('[value="California"]').contains(firstCity).click();
        cy.get(`button[type="button"]`).contains("Get All Selected").click();
    }

 
}