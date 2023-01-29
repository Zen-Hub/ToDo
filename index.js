let inpTask = document.querySelector('.inpTask')
let buttonAdd = document.querySelector('.btnAdd')
let ulTodo = document.querySelector('.ulTodo')

//сохраняем данные
let arrTasks = []

//ловим клик и запускаем функцию
buttonAdd.addEventListener('click', AddTaskfun)

//Добавили задачу
function AddTaskfun() {

  //Текст который мы ввели в инпут
  const inpText = inpTask.value

  //объект для хранения новых задач
  const newTaskObj = {
    id: Date.now(),
    text: inpText,
    done: false
  }

  //Добавляем задачи в массив
  arrTasks.push(newTaskObj)

  console.log(arrTasks)

  //Формируем задачу для вывода на экран
  const taskHTML = `
      <li id = "${newTaskObj.id}" class="liAllTask">
          <div class="taskText">${newTaskObj.text}</div>
          <button class="btnDone btnLi " data-action = 'done'>done</button>
          <button class="btnDelete btnLi " data-action = 'delete'>delete</button>
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
    
    //добавляем класс который изменит вид <li>
    parent.classList.toggle('done')

  }
}

//сохраняем данные



// let toDoObj = {
//   'keyTodo': 
// }

function localStFun(){

  let arrr = arrToDo.push()

  // localStorage('keyTodo', arrTodo)

}



//insertAdjacentHTML вставит заданный элемент в HTML
//focus() ставит фокус в заданную область
//target.dataset находит по атрибуту
//closest ищет родителя по классу или тегу
//remove() удалит тег 
//localStorage('key',data)  храним в браузере данные
//localStorage.setItem('key',data) - сохранили данные в браузере
//localStorage.getItem('key',data) - вытащили данные из браузера
