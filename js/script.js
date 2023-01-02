const formTodo = document.querySelector('.formTodo')
const inpForm = document.querySelector('.inpForm')

formTodo.addEventListener('submit', function (event) {

    event.preventDefault()
    console.log('submit')

    //take text iput
    const inpText = inpForm.value

    //add text to the page
    const textTodo = `
    <li class="list-group-item d-flex justify-content-between task-item">
    <span class="task-title"></span>
    <div class="task-item__buttons">
        <button type="button" data-action="done" class="btn-action">
            <img src="./img/tick.svg" alt="Done" width="18" height="18">
        </button>
        <button type="button" data-action="delete" class="btn-action">
            <img src="./img/cross.svg" alt="Done" width="18" height="18">
        </button>
    </div>
    </li>`


})
























