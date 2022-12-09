"use strict";
// https://gist.github.com/jgravois/5e73b56fa7756fd00b89
// Get each selector
const form = document.querySelector("tool_form");
const internet = document.querySelector("#internet");
const tv = document.querySelector("#tv");
const output = document.querySelector("#output");
// Watch the form for changes and process them
form === null || form === void 0 ? void 0 : form.addEventListener("change", processQuote);
// Alt form listener used by button thats been removed
// mybtn?.addEventListener("click", e => {
//     processQuote()
// })
// Process each function, might refactor to above event listener
function processQuote() {
    processInternet();
}
function processInternet() {
    // if (internet?.value == "" || internet?.value == null) return
    if ((internet === null || internet === void 0 ? void 0 : internet.value) !== "" || (internet === null || internet === void 0 ? void 0 : internet.value) !== null) {
        console.log(internet === null || internet === void 0 ? void 0 : internet.value);
    }
}
