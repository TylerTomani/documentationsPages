const units = document.querySelectorAll(".unit ")
const iframe = document.querySelector("iframe")
const lessonDisplay = document.querySelector('.lesson-display')
let selectedLesson;


// const lesson
units.forEach(unit => {
    const parent = unit.parentElement;
    const lessons = parent.querySelectorAll("li > ul > li > a")

    lessons.forEach(lesson => {

        lesson.addEventListener('click', e => {
            // e.preventDefault() and e.stopPropagation() together stops window from going to link page
            e.preventDefault()
            e.stopPropagation()
            selectedLesson = e.target.href;
            console.log(selectedLesson)
            iframe.src = selectedLesson
            iframe.focus()

            // // Not working but it doesn't matter
            // console.log(lesson.innerHTML)
            lessonDisplay.innerHTML = ` &nbsp;&rarr; ${lesson.innerHTML}`
            // console.log(e.target.offsetY)
            let position = e.target.getBoundingClientRect()
            window.scroll(0,0)
        })
    })
})