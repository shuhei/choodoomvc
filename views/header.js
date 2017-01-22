var html = require('choo/html')

module.exports = function headerView (todos, prev, send) {
  return html`
    <header class="header">
      <h1>todos</h1>
      <input class="new-todo"
        autofocus
        placeholder="What needs to be done?"
        onkeydown=${addTodo(send)}
      />
    </header>
  `
}

function addTodo (send) {
  return function (e) {
    if (e.keyCode === 13) {
      send('todos:add', { payload: e.target.value })
      e.target.value = ''
    }
  }
}
