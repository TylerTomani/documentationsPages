const img = document.getElementById("image")
const speedTypeJS = document.getElementById("speedTypeJS")

speedTypeJS.addEventListener("focus", () => {
    // console.log("focus")
    img.src = "jsTutorials/apps/speedTypeJS/speedTypeJS.png"
})
speedTypeJS.addEventListener("focusout", () => {
    // console.log("focus")
    img.src = ""
})

