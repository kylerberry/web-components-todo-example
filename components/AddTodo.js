window.customElements.define('add-todo', class extends ComponentMixin(HTMLElement) {

    componentDidMount() {
        this.root.querySelector('#addTodo').addEventListener('click', () => {
            let input = this.root.querySelector('#todoInput')
            if (!input.value) {
                return
            }
            this.dispatchEvent(new CustomEvent('add-todo', {bubbles: true, composed: true, detail: {todo: input.value}}))
            input.value = ''
        })
    }

    render() {
        this.root.innerHTML = `
            <input id="todoInput" type="text" value="">
            <button id="addTodo">Add Todo</button>
        `
    }
})