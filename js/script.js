'use strict'

console.log("WORK")
let container = document.querySelector('.todo__container')
let divQsOne = document.querySelector('.questionOne')
let divAnsversWatch = document.querySelector('.ansversWatch')
let divQuestionarrView = document.querySelector('.questionView')

let inpTodo = document.querySelector('.inpTodo')

let btnBeginTodo = document.querySelector('.btnBeginTodo')
let btnAddTodo = document.querySelector('.btnAddTodo')



let objPersonalMov = {
    count: "",
    movies: {},
    actors: {},
    view: [],
    privat: false
}

//create todo
btnBeginTodo.onclick = () => {


    inpTodo.value = 'create todo'

    setTimeout(clearInp, 1000)





}
// input clear
function clearInp() {
    inpTodo.style.backgroundColor = '#003153'
    inpTodo.value = ''

}


inpTodo.addEventListener("click", () => {
    if (inpTodo.focus) {
        inpTodo.style.backgroundColor = '#003153'
    } else { inpTodo.style.backgroundColor = '#3E5F8A' }
})


//add todo
let divDo
btnAddTodo.onclick = () => {
    let divDo = document.createElement('div')
    divDo.classList.add('divTodo')

    container.append(divDo)
    divDo.innerHTML = inpTodo.value

    objPersonalMov.movies[divDo.innerHTML] = inpTodo.value

    inpTodo.value = ''

    console.log(objPersonalMov)

}


//push todo
btnAddTodo.addEventListener("click", () => {
    if (inpTodo.value == '') {
        inpTodo.placeholder = '...empty',
            inpTodo.style.backgroundColor = '#1F2833'
    }
})




















