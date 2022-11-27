/// <reference type="Cypress">

describe("Precondición: Admin debe logearse", function(){

    it("CP1: Mostrar página", function(){
        cy.visit("http://localhost:8081/Sistema-de-gestion-de-finansas/")

    })

    it("CP2: Transcribir credenciales para login", ()=>{
        cy.get('[name="login_usuario"]').type("Administrador")
        cy.get('[name="login_clave"]').type("Administrador")
        cy.get('button[type="submit"]').click()
    })    
})

describe("Precondición: Sólo el admin puede registrar nuevos usuarios", ()=>{

    it("CP3: Crear nuevo Usuario", ()=>{
        // cy.get('.navbar-burger').click()
        // cy.get('[href="index.php?vista=user_new"]').click()

    })


} )