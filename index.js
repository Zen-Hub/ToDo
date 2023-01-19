buttonAdd.addEventListener('click', function () {
    console.log("click")

    //Текст который мы ввели в инпут
    const inpText = inp.value

    //Формируем задачу для вывода на экран
    const taskHTML = `
        <li class="all-task">
            <span class="task-text">${inpText}</span>
            <button class="taskDone"></button>
            <button class="taskDelete"></button>
        </li>
        `

    //Выводим на экран
    allTask.insertAdjacentHTML('beforeend',taskHTML)
})
