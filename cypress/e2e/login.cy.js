context ('funcionalidade login' , () =>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

it('deve fazer login com sucesso' , ()=> {
    cy.get('#username') . type('aluno_ebac@teste.com')
    cy.get('#password') . type('teste@teste.com')
    cy.get('.woocommerce-form > .button') . click()

    cy.get('.page-title') . should ('contain','minha conta')


})

it.only('deve exibir uma mensagem de erro ao inserir usuario invalido' , () => {
 cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username') . type('aluno4ebac@teste.com')
    cy.get('#password') . type('teste@teste')
    cy.get('.woocommerce-form > .button') . click()

})

it.only('deve exibir uma mensagem de erro ao inserir senha invalidos' , () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
       cy.get('#username') . type('aluno4ebac@teste.com')
       cy.get('#password') . type('teste@teste')
       cy.get('.woocommerce-form > .button') . click()
       
   
   })
})

