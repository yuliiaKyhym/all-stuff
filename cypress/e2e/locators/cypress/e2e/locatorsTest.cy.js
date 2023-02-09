///<reference types="cypress"/>

// const basicUrl = "https://sanitarskyi-cypress-g2.herokuapp.com/commands/querying"
// function basicFunction(description, getBy) {
//   describe('Locators lecture', () => {
//     it('passes', () => {
//       cy.visit(basicUrl)
//       cy.log(description)
//       cy.get(getBy)
//     })
//   })
// }
// basicFunction('Get element by tag name', 'nav')
// basicFunction('Get element by attribute name', '[placeholder]')
// basicFunction('Get element by id', '#inputEmail')
// basicFunction('Get element by attribute name and value', '[placeholder="Email"')
// basicFunction('Get element by class value', '.query-btn')
// basicFunction('Get element by class value', '.query-btn.btn')
// basicFunction('Get element by tag name, attirbute and value', 'input[placeholder="Email"]')
// basicFunction('Get element by tag name, attirbute with value, id, class value, attribute name', 'input[type="text"]#inputEmail.form-control[placeholder]')
// basicFunction('The most recommended way to find element (by data-test attribute)', '[data-test-id="test-example"]')


describe('Locators lecture', () => {
  it('Complex locators - amazon', () => {
    cy.visit('https://amazon.com')
    cy.get('div#gw-card-layout> div[data-display-at = "smws"]')
    cy.get('div#gw-card-layout> div> div> div> a') //full path to the element строго по дом структуре
    cy.get('div#gw-card-layout a') //relative path to the element
    cy.get('div+div.a-cardui-body') // if use + cypress finds elements which are at once after div tag

  })
  it('Complex locators - rozetka', () => {
    cy.visit('https://rozetka.com.ua/ua')
    cy.get('ul+button') //поиск строго идущего следущим соседа (на одном уровне)
    cy.get('ul~button') //поиск любого следующего соседа
    cy.get('ul>button') //поиск дочернего
    cy.get('div~a')
    cy.get('[title ~= "Kingston"]') // ~= ищем элемент, который начинается на Kingston
    cy.get('[title *= "Капсули"]') // ищем элемент где в начале, середине, конце слово капсули
    cy.get('[href ^= "https://hard.rozetka.com.ua"]') //ищем элемент по первой части ссылки
    cy.get('[src $= ".jpg"') //ищем элемент по окончанию значения аттрибута
    cy.get('rz-main-page-sidebar ul.menu-categories li:first-of-type') //поиск первого элемента (li:first-of-type псевдокласс)
    cy.get('rz-main-page-sidebar ul.menu-categories li:last-of-type') //поиск последнего элемента (li:last-of-type псевдокласс)
    cy.get('rz-sidebar-fat-menu li:nth-child(8)') //поиск 8го дочернего элемента в списке
    cy.get('rz-sidebar-fat-menu li:nth-last-child(8)') //поиск 8го дочернего элемента в списке с конца
    cy.get('span.tile__price-value:contains(" 180 ")') //поиск элемента, который содержит текст 

    // herokuapp
    cy.get('input:enabled') //поиск всех полей, которые enabled (or disabled)
    // С каких локаторов начинать: id> unique attribute name> placeholder or text> link> class> parent-child tags
  })

  it.only('Homework locators', () => {

    //Visit Form Layout tab
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/')
    cy.get('[src="assets/images/material-dark-theme.jpg"').click()
    cy.get('.menu-title.ng-tns-c141-9').click()
    cy.get('.menu-title.ng-tns-c141-11').click()

    //Inline form
    cy.get('[placeholder="Jane Doe"]').type("Yuliia")
    cy.get('.form-inline.ng-untouched>input[placeholder="Email"]').type("email@test.com")
    cy.get('.form-inline.ng-untouched>nb-checkbox').click()
    cy.get('.form-inline.ng-untouched>button').click()

    //Using the Grid
    cy.get('#inputEmail1').type("email@test.com")
    cy.get('#inputPassword2').type("password")
    cy.get('input[type="radio"]')
      .first()
      .check({ force: true })
    cy.contains('Sign in').click()

    //Basic form
    cy.get('#exampleInputEmail1').type('email@test.com')
    cy.get('#exampleInputPassword1').type('password')
    cy.get('.text').contains('Check me out').click()
    cy.get('[status="danger"]').click()

    //Form without labels
    cy.get('[placeholder="Recipients"]').type('Recipient 1')
    cy.get('[placeholder="Subject"]').type('Subject 1')
    cy.get('[placeholder="Message"]').type('Message 1')
    // cy.get('[placeholder="Message"]')
       .trigger('mousedown', 'bottomRight', { force: true })
      .trigger('mousemove', 195, 200, { force: true })
       .trigger('mouseup', { force: true })
    cy.get('[status="success"]').click()

    //Block form
    cy.get('#inputFirstName').type('First Name') // if use xpath - '//input[@placeholder="First Name"]'
    cy.get('#inputLastName').type('Last Name')
    cy.get('#inputEmail').type('email@test.com')
    cy.get('#inputWebsite').type('www.website.com')
    cy.get('.appearance-filled.status-basic').click()

    //Horizontal form
    cy.get('#inputEmail3').type('email@test.com')
    cy.get('#inputPassword3').type('password')
    cy.get('.text')
      .contains('Remember me')
      .last()
      .click()
    cy.get('[status="warning"]').click()

  })
})

//xpath: более старый вариант, медленее (в сравнеии с сss) локализации элемента (относительный // и абсолютный путь /)
// example xpath - '//*[contains(text(), "Submit")]'
