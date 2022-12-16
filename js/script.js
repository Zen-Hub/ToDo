'use strict'

console.log("WORK")

let divQsOne = document.querySelector('.questionOne')
let divAnsversWatch = document.querySelector('.ansversWatch')
let  divQuestionarrView = document.querySelector('.questionRating')

let inpQuestionOne = document.querySelector('.inpQsOne')
let inpView = document.querySelector('.inpView')
let btnStart = document.querySelector('.btnStart')
let btnPush = document.querySelector('.btnPush')
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

   funcarrView()

   divQsOne.innerHTML = ''
   
   inpQuestionOne.value = ''
   
    
})

//add for object
function funcAddObj(){
    objPersonalMov.movies[divQsOne.innerHTML] = inpQuestionOne.value
    
    
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
function funcarrView(){

    for(let i = 0; i < arrView.length; i++){
        divQuestionarrView.innerHTML = arrView[sumRating] 
    }

    if(sumRating<arrView.length-1){
        sumRating++
    }else{sumRating=0}

    console.log(sumRating)
   
}

btnPushView.onclick=()=>{
    objPersonalMov.view.push(inpView.value)
    inpView.value = ''
    console.log(objPersonalMov.view)
}
