window.customElements.define('my-favorite', class extends ComponentMixin(HTMLElement) {

    static get observedAttributes() {
        return ['favorite']
    }

    attributeChangedCallback(prop, ov, nv) {
        this.render(nv)
    }

    render (fav = '') {
        this.root.innerHTML = `<strong>${fav}</strong>`
    }
})