const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random'
const quoteDisplayEl = document.getElementById("quoteDisplay")
const authorEl = document.getElementById("author")
const quoteInputEl = document.getElementById("quoteInput")
const nextBtn = document.getElementById("nextBtn")
const homeLink = document.getElementById("homeLink")

let correct = false
quoteInputEl.addEventListener("input", e => {
    
    const quoteArray = quoteDisplayEl.querySelectorAll("span")
    const inputArray = quoteInputEl.value.split("")
    
    console.log(nextBtn)
    quoteArray.forEach((charSpan,index) => {
        const char = inputArray[index]
        if(char == null){
            charSpan.classList.remove("incorrect")
            charSpan.classList.remove("correct")
            correct = false;
        } else if (char === charSpan.innerText){
            charSpan.classList.add("correct")
            charSpan.classList.remove("incorrect")
            correct = true
        } else {
            charSpan.classList.add("incorrect")
            charSpan.classList.remove("correct")
            correct = false;

        }
    })
    if(correct){
        nextBtn.classList.remove("hide")
    } else {
        nextBtn.classList.add("hide")

    }
    console.log(correct)
})

nextBtn.addEventListener("click", renderNewQuote)

function getRandomQuote(){
    return fetch(RANDOM_QUOTE_API_URL)
        .then(response => response.json())
        .then(data => data)
}

async function renderNewQuote(){
    const data = await getRandomQuote()
    // nextBtn.classList.add("hide");
    // console.log(data)
    quoteDisplayEl.innerText = ""
    const quote = data.content
    // quoteDisplayEl.innerText = quote
    quote.split("").forEach(char => {
        let charSpan = document.createElement("span")
        charSpan.innerText = char;
        quoteDisplayEl.appendChild(charSpan)
    })
    authorEl.innerText = "-" + data.author 
    quoteInputEl.value = null
    quoteInputEl.focus()
}
renderNewQuote()

quoteInputEl.addEventListener("focus",e => {
    window.scroll(0,0)
})
nextBtn.addEventListener("focus",e => {
    window.scroll(0,0)
})

homeLink.addEventListener("focus",e => {
    window.scroll(0,0)
})