"use strict";
// For local web server dev testing
// https://gist.github.com/jgravois/5e73b56fa7756fd00b89
// Get each selector
const form = document.getElementById("tool_form");
const internet = document.getElementById("internet");
// const tv = document.querySelector<HTMLSelectElement>("#tv")
const output = document.getElementById("output");
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
        // console.log(internet.value)
        const intOutput = document.createElement("p");
        intOutput.append(output.innerHTML += internet.value);
        output.append += intOutput;
    }
}
