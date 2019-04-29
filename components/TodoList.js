/**
 * TodoList Component
 */
window.customElements.define('todo-list', class extends HTMLElement {
    constructor() {
        super()
        this.root = this.attachShadow({mode: 'open'})
        this.todos = []
    }

    // public setter since rich data is not to be serialized for attributes
    // https://developers.google.com/web/fundamentals/web-components/best-practices#aim-to-only-accept-rich-data-objects-arrays-as-properties
    set todos(todos) {
        this.root.innerHTML = this.render(todos)
    }

    render = (todos = []) => {
        return `
        <ul>
            ${todos.map((todo, index) => `
                <li>
                    <todo-item index=${index}>
                        ${todo}
                    </todo-item>
                </li>
            `).join('')}
        </ul>
    `
    }
})