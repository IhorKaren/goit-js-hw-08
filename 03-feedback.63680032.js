var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function v(e,t,n){var r,o,i,a,u,f,c=0,l=!1,v=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function T(e){return c=e,u=setTimeout(w,t),l?b(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-c>=i}function w(){var e=m();if(j(e))return S(e);u=setTimeout(w,function(e){var n=t-(e-f);return v?d(n,i-(e-c)):n}(e))}function S(e){return u=void 0,y&&r?b(e):(r=o=void 0,a)}function h(){var e=m(),n=j(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return T(f);if(v)return u=setTimeout(w,t),b(f)}return void 0===u&&(u=setTimeout(w,t)),a}return t=p(t)||0,g(n)&&(l=!!n.leading,i=(v="maxWait"in n)?s(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),h.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=o=u=void 0},h.flush=function(){return void 0===u?a:S(m())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=o.test(e);return u||i.test(e)?a(e.slice(2),u?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y={},b=document.querySelector(".feedback-form"),T=b.querySelector('input[name="email"]'),j=b.querySelector('textarea[name="message"]');b.addEventListener("submit",(function(e){e.preventDefault();const{elements:{email:t,message:n}}=e.currentTarget;console.log({login:t.value,password:n.value}),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),b.addEventListener("input",t((e=>{y[e.target.name]=e.target.value,function(){const e=JSON.stringify(y);localStorage.setItem("feedback-form-state",e)}()}),500)),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(T.value=e.email,j.value=e.message)}();
//# sourceMappingURL=03-feedback.63680032.js.map
