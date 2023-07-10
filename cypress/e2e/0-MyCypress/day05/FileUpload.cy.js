/// <reference types="Cypress" />

describe('File Upload', () => {
    //cypress-file-upload yüklenmeli
    it.skip('Single File Upload', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1="wise1.jpg"
        cy.get('#filesToUpload').attachFile(path1)
        cy.get('#fileList > li').should('include.text','wise1')
    });
    it.skip('Multiple File Upload 1', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1="wise1.jpg"
        const path2="wise2.jpg"
        const path3="wise3.jpg"

        cy.get('#filesToUpload').attachFile(path1)
        cy.wait(2000)
        cy.get('#filesToUpload').attachFile(path2)
        cy.wait(2000)
        cy.get('#filesToUpload').attachFile(path3)

        cy.get('#fileList > li').should('include.text','wise3')
    });
    it.skip('Multiple File Upload 2', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1="wise1.jpg"
        const path2="wise2.jpg"
        const path3="wise3.jpg"

        cy.get('#filesToUpload').attachFile({filePath : path1,fileName : 'wise1.jpg',filePath : path2,fileName : 'wise2.jpg',filePath : path3,fileName : 'wise3.jpg'})
    });

    it('Multiple File Upload 3', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1="wise1.jpg"
        const path2="wise2.jpg"
        const path3="wise3.jpg"

        cy.get('#filesToUpload').attachFile([path1,path2,path3])
    });
});