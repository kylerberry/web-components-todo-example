/**
 * TodoList Component
 */
window.customElements.define('todo-list', class extends ComponentMixin(HTMLElement) {
    constructor() {
        super()
        this.items = []
    }

    // public setter since rich data is not to be serialized for attributes
    // https://developers.google.com/web/fundamentals/web-components/best-practices#aim-to-only-accept-rich-data-objects-arrays-as-properties
    set todos(todos) {
        this.items = todos
        this.render(todos)
    }

    get todos() {
        return this.items
    }

    render = (todos = []) => {
        let template
        if (todos.length) {
            template = `
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
        } else {
            template = `<ul><li>Waiting for something to do...</li><ul>`
        }
        this.root.innerHTML = template
    }
})