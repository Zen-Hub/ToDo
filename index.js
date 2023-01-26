let inpTask = document.querySelector('.inpTask');
let buttonAdd = document.querySelector('.btnAdd');
let ulTodo = document.querySelector('.ulTodo')

//ловим клик и запускаем функцию
buttonAdd.addEventListener('click', AddTaskfunс)

//Добавили задачу
function AddTaskfunс() {
  //Текст который мы ввели в инпут
  const inpText = inpTask.value

  //Формируем задачу для вывода на экран
  const taskHTML = `
      <li class="liAllTask">
          <div class="taskText">${inpText}</div>
          <button class="btnDone btnstyle" data-action = 'done'>done</button>
          <button class="btnDelete btnstyle" data-action = 'delete'>delete</button>
      </li>
      `

  //Выводим на экран(вставляем в HTML)
  ulTodo.insertAdjacentHTML('beforeend', taskHTML)

  //Очистим инпут
  inpTask.value = ''

  //вернули фокус в инпут
  inpTask.focus()
}

//Удалили задачу 
ulTodo.addEventListener('click', deleteTaskFun)

function deleteTaskFun(event) {

  if (event.target.dataset.action == 'delete') {
    console.log('DEL')

    //смотрим родителя с тегом <li> или его классом
    const parent = event.target.closest('.liAllTask')
    console.log(parent)
    //удаляем родителя
    parent.remove()

  }
}

//отметим выполненные задачи
ulTodo.addEventListener('click', doneTaskFun)

function doneTaskFun(event) {

  if (event.target.dataset.action == 'done') {
    console.log('done')

    //смотрим родителя с тегом <li> или его классом
    const parent = event.target.closest('.liAllTask')
    console.log(parent)
    //удаляем родителя
    parent.remove()

  }
}


//insertAdjacentHTML вставит заданный элемент в HTML
//focus() ставит фокус в заданную область
//target.dataset находит по атрибуту
//closest ищет родителя по классу или тегу
//remove() удалит тег 
