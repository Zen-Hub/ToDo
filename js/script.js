'use strict'

console.log("WORK")
let container = document.querySelector('.todo__container')

let inpTodo = document.querySelector('.inpTodo')

let btnAddTodo = document.querySelector('.btnAddTodo')

//create todo block
let divDo = document.createElement('div')
divDo.classList.add('divTodo')


//this task in arr tasks
const objNewTask = {
    id: Date.now(),
    text: '',
    done: false
}

console.log(objNewTask)

getLockalStorage()


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
btnAddTodo.onclick = () => {
    if (inpTodo.value == '') {

        return
    }


    container.append(divDo)

    divDo.innerHTML = inpTodo.value

    objNewTask.text = inpTodo.value

    addTask()
    saveToLockalStorage()
   

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
    divDo.innerHTML = objNewTask.text
}

function addTask(event) {

    // event.preventDefault()

    //take object task for input

    //add object task in 
    arrTasks.push(objNewTask)

    console.log(arrTasks)

    //make markuup for the task
}
//save LoskalStorage
function saveToLockalStorage() {
    localStorage.setItem('keyLockal', JSON.stringify(arrTasks))
}

function getLockalStorage() {
    localStorage.getItem('keyLockal')
    console.log(localStorage.getItem('keyLockal'))

    container.append(divDo)
    divDo.innerHTML = objNewTask.text
}
