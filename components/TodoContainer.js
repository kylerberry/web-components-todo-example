window.customElements.define('todo-container', class extends ComponentMixin(HTMLElement) {
    get todos() {
        return this.todoList.todos
    }

    set todos(todos) {
        this.todoList.todos = todos
    }

    componentDidMount() {
        // how to get slot-children
        this.todoList = this.root.querySelector('[name=todoList]').assignedNodes()[0]

        this.addEventListener('add-todo', e => {
            let newTodos = this.todoList.todos
            newTodos.push(e.detail.todo)
            this.todoList.todos = newTodos
        })

        this.addEventListener('todo-item:completed', e => {
            let filteredTodos = this.todoList.todos.filter(
                (todo, i) => {
                    return i != e.detail.index
                }
            )
            this.todoList.todos = filteredTodos
        })
    }

    render() {
        this.root.innerHTML = `
            <slot name="addTodo"></slot>
            <slot name="todoList"></slot>
        `
    }
})