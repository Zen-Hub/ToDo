'use strict'

console.log("WORK")

let divQsOne = document.querySelector('.questionOne')
let divAnsversWatch = document.querySelector('.ansversWatch')
let divQuestionRating = document.querySelector('.questionRating')

let inpQuestionOne = document.querySelector('.inpQsOne')
let btnStart = document.querySelector('.btnStart')
let btnPush = document.querySelector('.btnPush')
let arrQst = ['what your like genre?', 'what your favorite movie?', 'your favorite actor?']
let arrGenres = ['what your rating?', 'what your rating?', 'what your rating?']
let objPersonalMov = {
    count: "",
    movies: {},
    actors: {},
    rating: [],
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
    

   

   funcAddObj()

   divQsOne.innerHTML = ''
   
   inpQuestionOne.value = ''
    
})

function funcAddObj(){
    objPersonalMov.movies[divQsOne.innerHTML] = inpQuestionOne.value
    
    console.log(objPersonalMov)
}

//check privat
function funcCheskPrivat(){
    if(objPersonalMov.privat==false){
        console.log(objPersonalMov)
    }
}
funcCheskPrivat()

//objPersonalMov.rating
let sumRating = 0
function funcQuestion(){

    for(let i = 0; i < arrGenres.length; i++){
        divQuestionRating.innerHTML = arrGenres[sumRating] + `${i}`
    }

    if(sumRating>=arrGenres.length){
        sumRating++
    }else{sumRating=0}
   
}
funcQuestion()
