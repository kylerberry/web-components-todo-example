# web-components-todo-example

__SAME THING IN VueJS:__
- https://gist.github.com/kylerberry/493c5339c8aa22fa50c7694cdf7a4d0e

__SAME THING IN React:__
- https://gist.github.com/cjsaylor/f69a273c8ee9077cd62adecfccaf8dfa

![](https://uc98551cb20250f4f788f1825e18.previews.dropboxusercontent.com/p/orig/AAZduqLmGnIw3WvvalgD-MNqc3S4tiiOx-z-kqsHorLgXqpBsYxyAAPav_8IT2j3pc1DUMPCvWRKEAZlua5BhkKsDfMBMIs-ebxeXditKTBEPedU8JCqm-OiQJUMOSoY6pmS298Pic92dYk5kxtKX0PZFo4UrlRTyG0gH2u7jHPLDDgY9vhVAnqS16KKuxUVLadm8GkUmoFcIUz4iUWtCBiEc0fON3t1UBnAEuG2-qAK8VWjybvg0fDjATPgXlqo2eC2ebZHZGZ8vjNBNWK8mzfM3XoDfqdd2NZC8-mvYi4i7BT_BeXER5_SGdWNaSHNUSx9PTBuASmIP2GAkwJtLpzUuZBn83Vb4r2-LdAOoUKBpEU3Pwq2FjMOT9Qb6ZK9lacMxp_h3uHCCoPxBFy1vM0oNoUtXFvOe2B9ktMtmQ_vA33Z2INQoGX_HKuh0UJaKj7llV1FwwJ2zohWmDEJ4z-H/p.gif?size_mode=5)

__Things I wanted to achieve:__
- completely native implementation
- stateless rendering of template
- content-distribution via `<slot>`API
- shadowRoot encapsulation (scoped styles and hiding implementation)
- unidirectional dataflow, achieved via:
  - using attributes for data communication to children
  - using dispatched events for communication with parents
- provide an example of setters for passing rich data (arrays, objects)

__Things that could be optimized:__
- batching multiple attribute updates `attributeChangedCallback` to one render cycle
- attributeMarshalling (syncing attributes to obj properties)

Here are some best practices I followed: https://developers.google.com/web/fundamentals/web-components/best-practices
