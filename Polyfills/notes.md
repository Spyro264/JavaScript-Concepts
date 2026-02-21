# What Are Pollyfills ?

- A Polyfill is a piece of js code thats adds support to a feature that is not available in the older browser .
- In simpler words polyfill is the code that fills the gap in the browsers that doesnt support modern js features .

# Why Do We Need Polyfills ?

- Js keeps evolves for example :
- Arrya.prototype.includes() introducces iun ES2016
- Promise and Object.assign() introduces in ES6.
- BUt older browser like internet explorer , old safari version , old android webViews DOnt support these features.
- If you write `[1,2,3].includes(2)` . older browser will throw TypeError : includes is not a function
- Thats where polyfill comes in .

# Example: Simple Polyfill

- Lets polyfill `Array.prototype.includes`.

```
if (!Array.prototype.includes) {
  Array.prototype.includes = function(value) {
    return this.indexOf(value) !== -1;
  };
}
```
- What this does :
- Checks if includes already exists
- If not we create it . uSes indexof internally.
- NOw even old browsers can use: `[1,2,3].includes(2)`
- Tools like babel webpack vite automatically add polyfills depending on browser targets.

# Simple Analogy

- Think of you bought a new charger ( modern js ) but old socket ( old browser ) doesnt support it . So you use an adapter 
- Polyfill = adapter for broswer


Difference between Polyfill and Transpiler?

How Babel adds polyfills?

How to write advanced polyfills?