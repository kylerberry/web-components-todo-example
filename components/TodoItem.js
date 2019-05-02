/**
 * TodoItem Component
 */
window.customElements.define('todo-item', class extends ComponentMixin(HTMLElement) {

    componentDidMount() {
        this.root.querySelector('input').addEventListener('change', (e) => {
            this.root.querySelector('slot').style = 'text-decoration: line-through'
            setTimeout(() => {
                this.dispatchEvent(new CustomEvent('todo-item:completed', {bubbles: true, composed: true, detail: {index: this.index}}))
            }, 250)
        })
    }

    static get observedAttributes() {
        return ['index']
    }

    attributeChangedCallback(prop, ov, nv) {
        if (nv && ov !== nv) {
            this.index = nv
        }
    }

    render = (state = {checked: false}) => {
        this.root.innerHTML = `
            <input type="checkbox" ${state.checked ? 'checked' : ''}>
            <slot></slot>
    `
    }
})