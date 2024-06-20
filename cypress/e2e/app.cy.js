describe('Pokedex', function() {
  it('front page can be opened 主页应该能打开', function() {
    cy.visit('http://localhost:5001')
    cy.contains('ivysaur') // 代码是全小写的，页面由css控制显示为首字大写，所以这里小写
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})

describe('详情页测试', function() {
  it('主页有charmander小火龙入口', function() {
    cy.visit('http://localhost:5001')
    cy.contains('charmander')
  })

  it('点击小火龙详情页应该显示详情', function() {
    cy.visit('http://localhost:5001')
    cy.get('a[href="/pokemon/charmander"]').click()
    cy.contains('charmander')
    // 不应该有 帕拉斯
    cy.should('not.contain','parasect')
  })

  it('进入小火龙详情页后，能够进入前一个详情页', function() {
    cy.visit('http://localhost:5001')
    cy.get('a[href="/pokemon/charmander"]').click()
    cy.contains('charmander')
    // 应该可以返回上级
    cy.contains('Previous').click()
    cy.contains('venusaur')
  })

  it('进入小火龙详情页后，能够进入下一个详情页', function() {
    cy.visit('http://localhost:5001')
    cy.get('a[href="/pokemon/charmander"]').click()
    cy.contains('charmander')
    // 应该可以进入下个
    cy.contains('Next').click()
    cy.contains('charmeleon')
  })

  it('进入小火龙详情页后，能够返回主页', function() {
    cy.visit('http://localhost:5001')
    cy.get('a[href="/pokemon/charmander"]').click()
    cy.contains('charmander')
    // 应该可以返回Home
    cy.contains('Home').click()
    cy.contains('bulbasaur')
  })
})