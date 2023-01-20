let inpTask = document.querySelector('.inpTask');
let buttonAdd = document.querySelector('.btnAdd');
let liAllTask = document.querySelector('.liAllTask');


buttonAdd.addEventListener('click', function () {
    console.log("click")

    //Текст который мы ввели в инпут
    const inpText = inpTask.value

    //Формируем задачу для вывода на экран
    const taskHTML = `
        <li class="all-task">
            <span class="task-text">${inpText}</span>
            <button class="taskDone"></button>
            <button class="taskDelete"></button>
        </li>
        `

    //Выводим на экран
    liAllTask.insertAdjacentHTML('beforeend',taskHTML)

    //Очистим инпут
    inpTask.value = ''

    //вернули фокус в инпут
    taskInput.focus()
    
})
