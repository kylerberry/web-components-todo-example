window.customElements.define('display-total', class extends ComponentMixin(HTMLElement) {
    static get observedAttributes() {
        return ['total']
    }

    attributeChangedCallback(prop, ov, nv) {
        this.render(nv)
    }

    render (total = 0) {
        this.root.innerHTML = `<strong>${total}</strong>`
    }
})