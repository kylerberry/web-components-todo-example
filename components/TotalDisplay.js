window.customElements.define('total-display', class extends ComponentMixin(HTMLElement) {
    get total() {
        return this.getAttribute('total')
    }

    set total(value) {
        this.setAttribute('total', value)
    }

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