console.log("WORK")

let numFilms = ''

let divQsOne = document.querySelector('.questionOne')

let inpQuestionOne = document.querySelector('.inpQsOne')
let inpQuestionTwo = document.querySelector('.inpQsTwo')


let btnOne = document.querySelector('.btn_1')
let btnQuestion = document.querySelector('.btnQuest')

let arrQst = ['what movies', 'your rating', 'your favorite movie?']


btnQuestion.onclick = () => {

    for (let i = 0; i < 3; i++) {
        divQsOne.innerHTML = arrQst[i]
    }
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

    console.log(personalMov)

})
