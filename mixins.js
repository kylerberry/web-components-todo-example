// class RootComponent {
//     constructor({
//         el, components, init
//     }) {
//         this.el = document.querySelector(el)
//         this.components = {}
//         components.forEach(c => {
//             let cameled = c.replace(/-([a-z]{1})/g, function (match) {
//                 return match.split('-')[1].toUpperCase()
//             })
//             this.components[cameled] = this.el.querySelector(c)
//         })
//         init.call(this)
//     }
// }

// const EventBus = (function () {
//     let subscribers = {}

//     return {
//         dispatch(name, data) {
//             if (!subscribers[name].length) {
//                 return
//             }
//             subscribers[name].map(cb => {
//                 cb.call(this, data)
//             })
//         },
    
//         subscribe(name, callback) {
//             if (!subscribers[name]) {
//                 subscribers[name] = []
//             }
//             return subscribers[name].push(callback)
//         },
    
//         unsub(name, ref) {
//             delete subscribers[name][ref]
//         }
//     }
// })()

// // class EventBus {
// //     constructor() {
// //         this.subscribers = {}
// //     }

// //     dispatch(name, data) {
// //         this.subscribers[name].map(cb => {
// //             cb.call(this, data)
// //         })
// //     }

// //     subscribe(name, callback) {
// //         if (!this.subscribers[name]) {
// //             this.subscribers[name] = []
// //         }
// //         return this.subscribers[name].push(callback)
// //     }

// //     unsub(name, ref) {
// //         delete this.subscribers[name][ref]
// //     }
// // }
const createStore = (cb) => {
    let state
    return (update = null) => {
        if (update !== null && state !== update) {
            if (typeof update === 'object' && typeof update !== 'undefined' && !update.length) {
                state = Object.assign({}, state, update)
            }
            else {
                state = update
            }
            cb(state)
        }
        return state
    }
}

// defines lifecycles
const ComponentMixin = base => class extends base {
    constructor() {
        super()
        if (!this.root) {
            this.root = this.attachShadow({mode: 'open'})
        }
    }

    connectedCallback() {
        if (typeof this.render !== 'function') {
            throw new Error('You must define a render method on your component.')
        }
        this.render()
        if (typeof this.componentDidMount === 'function') {
            //a lifecycle hook
            setTimeout(this.componentDidMount())
        }
    }
}

// define closed mode as mixin
const ClosedModeMixin = base => class extends base {
    constructor() {
        super()
        // @todo in closed mode, prob wouldn't attach to root like this
        if (!this.root) {
            this.root = this.attachShadow({mode: 'closed'})
        }
    }
}