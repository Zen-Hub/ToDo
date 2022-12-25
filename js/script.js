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
    todo: {},
    actors: {},
    view: [],
    privat: false
}


//check inp + color
inpTodo.addEventListener("click", () => {
    if (inpTodo.focus) {
        inpTodo.style.backgroundColor = '#003153'
    } else { inpTodo.style.backgroundColor = '#3E5F8A' }
})

//check inp value
btnAddTodo.addEventListener("click", () => {
    if (inpTodo.value == '') {

        inpTodo.style.backgroundColor = 'rgb(67, 175, 175)'
    }
})

//add todo
let divDo
let numTodo = 1

let divInner
let inpValue



btnAddTodo.onclick = () => {
    if (inpTodo.value == '') {

        return
    }

    let divDo = document.createElement('div')
    divDo.classList.add('divTodo')

    container.append(divDo)

    divDo.innerHTML = inpTodo.value

    divInner =  divDo.innerHTML

    inpValue = inpTodo.value

    objPersonalMov.todo[numTodo++] = inpTodo.value

    localStorage.setItem('todoLs',JSON.stringify(objPersonalMov))

   if(localStorage.getItem())

    

    inpTodo.value = ''

    console.log(objPersonalMov)

}

// function addLockalSt(){
//     localStorage.todo =JSON.stringify({ divInner : inpValue}) 
//     console.log()
//     localStorage.setItem('todo')
// }

//https://learn.javascript.ru/localstorage
