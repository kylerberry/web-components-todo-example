/**
 * AddTodo Component
 */
window.customElements.define('add-todo', class extends HTMLElement {
    constructor() {
        super()
        this.root = this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.root.innerHTML = this.render()
        this.root.getElementById('addTodo').addEventListener('click', () => {
            let input = this.root.getElementById('todoInput')
            if (!input.value) {
                return
            }
            this.dispatchEvent(new CustomEvent('add-todo', {
                bubbles: true,
                detail: {
                    todo: input.value
                }
            }))
            input.value = ''
            input.blur()
        })
    }

    render() {
        return `
            <input id="todoInput" type="text" value="">
            <button id="addTodo">Add Todo</button>
        `
    }
})