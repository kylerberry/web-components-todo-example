/**
 * AppView Component
 */
window.customElements.define('app-view', class extends HTMLElement {
    constructor() {
        super()
        this.root = this.attachShadow({mode: 'open'})
        this.todos = ['make a list', 'use web components', 'be awesome']
    }

    // this is where most of the work should happen
    // - rendering
    // - fetching data
    // - attaching listeners
    connectedCallback() {
        this.root.innerHTML = this.render()
        this.todoList = this.root.querySelector('todo-list')
        // the todoList child hasn't connected yet, so just wait a moment before setting initial data
        // this is an edge case but an example of a workaround where we may want to initialize
        // a child component with array or object data, however prefer primitives and initializing via attributes
        setTimeout(() => {
            this.todoList.todos = this.todos
        })

        // add new todos
        this.root.addEventListener('add-todo', ({detail}) => {
            this.todos.push(detail.todo)
            this.todoList.todos = this.todos
        })

        // remove a todo
        this.root.addEventListener('todo-item:completed', ({detail}) => {
            // update the list with filtered todos
            this.todos = this.todos.filter(
                (todo, i) => {
                    return i != detail.index
                }
            )
            this.todoList.todos = this.todos
        })
    }

    // every component defines a render method
    render() {
        return `
            <add-todo ref="addTodo"></add-todo>
            <todo-list ref="todoList"></todo-list>
        `
    }
})