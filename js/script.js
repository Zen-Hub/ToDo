'use strict'

console.log("WORK")

let divQsOne = document.querySelector('.questionOne')
let inpQuestionOne = document.querySelector('.inpQsOne')
let btnStart = document.querySelector('.btnStart')
let btnPush = document.querySelector('.btnPush')
let arrQst = ['what movies', 'your rating', 'your favorite movie?']
let personalMov = {
    count: "",
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

//start questions
let sum = 0

btnStart.onclick = () => {
    inpQuestionOne.value = ''

    for (let i = 0; i <= arrQst.length; i++) {
        divQsOne.innerHTML = arrQst[sum]

    }

    if (sum < arrQst.length - 1) {
        sum++
    } else { sum = 0 }


    console.log(sum)
}

//push ansvers
btnPush.addEventListener("click", () => {
    if (inpQuestionOne.value == '') {
        inpQuestionOne.placeholder = '...empty',
            inpQuestionOne.style.backgroundColor = '#ECEABE'
    }
    let inpValOne = inpQuestionOne.value

    personalMov.movies[`${inpValOne}`] = `${inpValTwo}`

    divQsOne.innerHTML = ''

    inpQuestionOne.value = ''

})


