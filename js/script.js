console.log("WORK")

let numFilms = ''

let divQsOne = document.querySelector('.questionOne')


let inpQuestionOne = document.querySelector('.inpQsOne')
let inpQuestionTwo = document.querySelector('.inpQsTwo')


let btnOne = document.querySelector('.btn_1')
let btnQuestion = document.querySelector('.btnQuest')

let arrQst = ['what movies', 'your rating', 'your favorite movie?']

console.log(arrQst.length)

let sum = 0

btnQuestion.onclick = () => {


    for (let i = 0; i <= arrQst.length; i++) {
        divQsOne.innerHTML = arrQst[sum]

    }

    if(sum < arrQst.length-1 ){
        sum++
    }else {sum=0}


    console.log(sum)
}


let personalMov = {
    count: "",
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


btnOne.addEventListener("click", () => {
    let inpValOne = inpQuestionOne.value
    let inpValTwo = inpQuestionTwo.value
    personalMov.movies[`${inpValOne}`] = `${inpValTwo}`

    divQsOne.innerHTML = ''

    console.log(personalMov)

})

