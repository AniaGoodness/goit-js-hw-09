function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=o.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){r[e]=o},o.parcelRequired7c6=n);var l=n("7Y9D8");Array.from(document.querySelectorAll("label")),Array.from(document.querySelectorAll("input"));const i=document.querySelector(".form");console.log("form",i);document.querySelector('button[type="submit"]');const u=(e,o)=>new Promise(((t,r)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):r({position:e,delay:o})}),o)}));i.addEventListener("submit",(o=>{o.preventDefault();const t=Number(i.elements.amount.value),r=Number(i.elements.step.value),n=Number(i.elements.delay.value);for(let o=1;o<=t;o++){u(o,n+r*(o-1)).then((({position:o,delay:t})=>{e(l).Notify.success(`✅ Fulfilled promise ${o} in ${t} ms`)})).catch((({position:o,delay:t})=>{e(l).Notify.failure(`❌ Rejected promise ${o} in ${t} ms`)}))}}));
//# sourceMappingURL=03-promises.5b17f32c.js.map
