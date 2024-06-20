describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:8081')
    cy.contains('ivysaur') // 代码是全小写的，页面由css控制显示为首字大写，所以这里小写
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})