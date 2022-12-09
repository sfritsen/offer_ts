// https://gist.github.com/jgravois/5e73b56fa7756fd00b89

// Get each selector
const form = document.querySelector<HTMLFormElement>("tool_form")
const internet = document.querySelector<HTMLSelectElement>("#internet")
const tv = document.querySelector<HTMLSelectElement>("#tv")

// Watch the form for changes and process them
form?.addEventListener("change", processQuote)

// Alt form listener used by button removed
// mybtn?.addEventListener("click", e => {
//     processQuote()
// })

// Process each function, might refactor to above event listener
function processQuote() {
    processInternet()
}

function processInternet() {
    // if (internet?.value == "" || internet?.value == null) return
    if (internet?.value !== "" || internet?.value !== null) {
        console.log(internet?.value)
    }
}