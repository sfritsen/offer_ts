// For local web server dev testing
// https://gist.github.com/jgravois/5e73b56fa7756fd00b89

// Get each selector
const form = document.getElementById("tool_form") as HTMLFormElement
const internet = document.getElementById("internet") as HTMLSelectElement
// const tv = document.querySelector<HTMLSelectElement>("#tv")
const output: any = document.getElementById("output") as HTMLDivElement
// const output: any = document.getElementById("output")?.innerHTML

// Watch the form for changes and process them
form?.addEventListener("change", processQuote)

// Alt form listener used by button thats been removed
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
        // console.log(internet.value)

        const intOutput = document.createElement("p")
        intOutput.className = "error_text"
        intOutput.innerHTML = internet.value
  
        output.appendChild(intOutput)
        // output.textContent = intOutput
        // output.innerHTML = intOutput
  
        console.log(output.innerHTML)
    }
}