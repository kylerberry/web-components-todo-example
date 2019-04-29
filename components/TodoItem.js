/**
 * TodoItem Component
 */
window.customElements.define('todo-item', class extends HTMLElement {
    constructor() {
        super()
        this.root = this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        this.root.innerHTML = this.render({checked: false})
        // strikethrough the element and notify data provider component of change
        this.root.getElementById('checkbox').addEventListener('change', (e) => {
            this.root.querySelector('slot').style = 'text-decoration: line-through'
            setTimeout(() => {
                // tell any components above that i've requested a change-in-state
                this.dispatchEvent(new CustomEvent('todo-item:completed', {
                    bubbles: true,
                    composed: true, //required for bubbling through custom-elements w/ shadow dom
                    detail: {index: this.index}
                }))
            }, 500)
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

    render = state => `
        <input id="checkbox" type="checkbox" ${state.checked ? 'checked' : ''}>
        <slot></slot>
    `
})