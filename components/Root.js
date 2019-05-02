new RootComponent({
    el: '#app',
    components: ['my-favorite', 'todo-list', 'add-todo'],
    init: function () {
        let {todoList, myFavorite} = this.components

        EventBus.subscribe('add-todo', ({data, target}) => {
            let newTodos = todoList.todos
            newTodos.push(data.todo)
            todoList.todos = newTodos
        })

        EventBus.subscribe('todo-item:completed', data => {
            let filteredTodos = todoList.todos.filter(
                (todo, i) => {
                    return i != data.index
                }
            )
            todoList.todos = filteredTodos
            myFavorite.setAttribute('favorite', '')
        })

        EventBus.subscribe('todo-item:favorited', data => {
            let fav = todoList.todos[data.index]
            myFavorite.setAttribute('favorite', fav)
        })
    }
})