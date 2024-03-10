export class AlertsPasge{

    accessBootStrapAlert(){
    cy.get('[class="dropdown-toggle"]').contains("Alerts & Modals").click();
    cy.get('[class="dropdown-menu"]').contains("Bootstrap Alerts").click();
    cy.get('h2').contains("Bootstrap Alert messages").should('be.visible');
    cy.get('p').contains("Click below button to display normal/auto closeable message in respective colors").should('be.visible');
    cy.get(`button[id="autoclosable-btn-success"]`).contains("Autocloseable success message").click({force:true});
    }

    accessBoostrapModal(modalMessage){
    cy.get('[class="dropdown-toggle"]').contains("Alerts & Modals").click();
    cy.get('[class="dropdown-menu"]').contains("Bootstrap Modals").click();
    cy.get('h2').contains("Bootstrap Modal Example for Automation").should('be.visible');
    cy.get('[class="panel-heading"]').contains("Single Modal Example").should('be.visible');
    cy.get(`a[class*="btn-primary"]`).contains("Launch modal").click({force:true});
    cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-body').should('contain', modalMessage);
    cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').contains("Save changes").click();
    }

    accessBoostrapMultipleModals(modalText,modalMessage){
        cy.get('[class="dropdown-toggle"]').contains("Alerts & Modals").click();
    cy.get('[class="dropdown-menu"]').contains("Bootstrap Modals").click();
    cy.get('h2').contains("Bootstrap Modal Example for Automation").should('be.visible');
    cy.get('[class="panel-heading"]').contains("Multiple Modal Example").scrollIntoView()
    cy.get('[class="panel-heading"]').contains("Multiple Modal Example").should('be.visible');
    cy.get('[href="#myModal"]').contains("Launch modal").click({force:true});
    cy.get('.modal-body > :nth-child(3)').should('contain', modalText);
    cy.get('.modal-body > .btn').contains("Launch modal").click({force:true});
    cy.get('#myModal0 > .modal-dialog > .modal-content > .modal-body').should('contain', modalMessage);
    cy.get('#myModal2 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').contains("Save changes").click();
    cy.get('.modal-body > :nth-child(3)').should('contain', modalText);
    }
}