'use strict'

console.log("WORK")
let container = document.querySelector('.todo__container')
let divQsOne = document.querySelector('.questionOne')
let divAnsversWatch = document.querySelector('.ansversWatch')
let divQuestionarrView = document.querySelector('.questionView')

let inpTodo = document.querySelector('.inpTodo')

let btnBeginTodo = document.querySelector('.btnBeginTodo')
let btnAddTodo = document.querySelector('.btnAddTodo')


let divDo = document.createElement('div')
divDo.classList.add('divTodo')


//this task in arr tasks
const newTask = {
    id: Date.now(),
    text: '',
    done: false
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

let numTodo = 1


btnAddTodo.onclick = () => {
    if (inpTodo.value == '') {

        return
    }

    divDo = document.createElement('div')
    divDo.classList.add('divTodo')
    container.append(divDo)


    divDo.innerHTML = inpTodo.value


    newTask.text = inpTodo.value

  

   

    addTask()
    saveToLoskalStorage()

    inpTodo.value = ''

   
}


// function addLockalSt(){
//     if(localStorage.getItem('keyLockalTodo')){
//         divDo.innerHTML = localStorage.getItem('keyLockalTodo'),
//         container.append(divDo)

//     }

//     console.log(localStorage.getItem('keyLockalTodo'))
// }

let arrTasks = []

if (localStorage.getItem('keyLockal')) {
    divDo.innerHTML = newTask.text
}

function addTask(event) {

    // event.preventDefault()

    //take object task for input
    



    //add object task in 
    arrTasks.push(newTask)

    console.log(arrTasks)

    //make markuup for the task
}
//save LoskalStorage
function saveToLoskalStorage() {
    localStorage.setItem('keyLockal', JSON.stringify(arrTasks))
}
