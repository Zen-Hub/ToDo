buttonAdd.addEventListener('click', function () {
    console.log("click")

    //Текст который мы ввели в инпут
    const inpText = inp.value

    //Выводим задачу на экран
    const taskHTML = `
    <li class="all-Todo">
        <span class="task-title">${inpText}</span>
        <button class="taskDone"></button>
        <button class="taskDelete"></button>
    </li>
    `
})
