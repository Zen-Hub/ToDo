'use strict'

console.log("WORK")

let divQsOne = document.querySelector('.questionOne')
let divAnsversWatch = document.querySelector('.ansversWatch')
let divQuestionarrView = document.querySelector('.questionView')

let inpTodo = document.querySelector('.inpTodo')

let btnBeginTodo = document.querySelector('.btnBeginTodo')
let btnAddTodo = document.querySelector('.btnAddTodo')
let btnPushView = document.querySelector('.btnPushView')
let arrQst = ['how many comedies have you watched?', 'how many sci-fi have been watched?', 'how many viewed mystics?']
let arrView = ['longest view?', 'longest view?', 'longest view?']
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
btnAddTodo.onclick = () => {
    let divDo = document.createElement('div')
    divDo.classList.add('divTodo')

    btnAddTodo.append(divDo)
    divDo.innerHTML = inpTodo.value


}



//start questions
let sum = 0

//push todo
btnAddTodo.addEventListener("click", () => {
    if (inpTodo.value == '') {
        inpTodo.placeholder = '...empty',
            inpTodo.style.backgroundColor = '#ECEABE'
    }


    funcAddObj()

    funcarrView()

    divQsOne.innerHTML = ''

    inpQuestionOne.value = ''


})

//add for object
function funcAddObj() {
    objPersonalMov.movies[divQsOne.innerHTML] = inpTodo.value
}

//check privat
function funcCheskPrivat() {
    if (objPersonalMov.privat == false) {
        console.log(objPersonalMov)
    }
}
funcCheskPrivat()

//objPersonalMov.rating
let sumRating = 0
function funcarrView() {

    for (let i = 0; i < arrView.length; i++) {
        divQuestionarrView.innerHTML = arrView[sumRating]
    }

    if (sumRating < arrView.length - 1) {
        sumRating++
    } else { sumRating = 0 }

    console.log(sumRating)

}
















