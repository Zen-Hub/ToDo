let inpTask = document.querySelector('.inpTask')
let buttonAdd = document.querySelector('.btnAdd')
let ulTodo = document.querySelector('.ulTodo')

//сохраняем данные
let arrTasks = []


//смотрим LockalStorage по ключу -->  если не пустой достаём данные

  if(localStorage.getItem('keyLocSet'))

  
  



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

   //сохраняем в LockalStorage
   setLockalSt()

  //Добавляем класс если задача выполнена
  const done = newTaskObj.done ? 'done' : ''

  //Формируем задачу для вывода на экран
  const taskHTML = `
      <li id = "${newTaskObj.id}" class="liAllTask ${done}">
          <div class="taskText">${newTaskObj.text}</div>
          <button class="btnDone btnLi " data-action = 'done'>done</button>
          <button class="btnDelete btnLi " data-action = 'delete'>delete</button>
      </li>
      `

     

  //Выводим на экран(вставляем в HTML)
  ulTodo.insertAdjacentHTML('beforeend', taskHTML)

  //

  //Очистим инпут
  inpTask.value = ''

  //вернули фокус в инпут
  inpTask.focus()


}

//Удалили задачу 
ulTodo.addEventListener('click', deleteTaskFun)

function deleteTaskFun(event) {

  //находим по атрибуту где был клик
  if (event.target.dataset.action == 'delete') {
    

    //смотрим родителя с тегом <li> или его классом по которому был клик
    const parentClk = event.target.closest('.liAllTask')

    // id задачи по которой был клик - id это строка --> переводим в число
    const parentClkId = Number(parentClk.id) 
    console.log(parentClkId)


    //смотрим все задачи в массиве -- > findIndex подсветил все задачи
    // const indexForDel = arrTasks.findIndex(function(task){

    //   //findIndex подсветил все задачи 
    //   console.log(task)

    //   //сравниваем каждую задачу с той по которой был клик
    //   if(task.id === parentClkId){
    //     return true
    //   }

    // })

    // console.log(indexForDel) //номер удаляемого <li> в массиве --> 0 1 2 3 ...
    // //вырезаем заданный тег с задачей из массива
    // arrTasks.splice(indexForDel,1)

    //второй метод - filter веренет новый массив кроме отфильтрованных элементов
   arrTasks = arrTasks.filter(function(task){
      if(task.id === parentClkId ){
        return false
      }else{return true} //добавит в массив
    })

     //сохраняем в LockalStorage
     setLockalSt()


 

    console.log(arrTasksNew)
        
    //удаляем родителя из разметки
    parentClk.remove()
    

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

    //находим id задачи -- > то есть всего тега <li> по которому кликнули
    const parentClkId  = Number(parent.id)
    
    const taskDone = arrTasks.find(function(task){
      if(task.id === parentClkId){
       return true
      }
    })

    console.log(taskDone)

    taskDone.done = !taskDone.done

     //сохраняем в LockalStorage
     setLockalSt()

    //добавляем класс который изменит вид <li>
    parent.classList.toggle('done')

  }
}

//сохраняем данные

function setLockalSt(){
  localStorage.setItem('keyLocSet',JSON.stringify(arrTasks))
}







//insertAdjacentHTML вставит заданный элемент в HTML
//focus() ставит фокус в заданную область
//target.dataset находит по атрибуту
//closest ищет родителя по классу или тегу
//remove() удалит тег 
//localStorage('key',data)  храним в браузере данные
//localStorage.setItem('key',data) - сохранили данные в браузере
//localStorage.getItem('key',data) - вытащили данные из браузера
//findIndex(function(task) - запускает функцию для каждого элемента массива и по условию находит нужный
  //условие обязательно
//splice  Умеет всё: добавлять, удалять и заменять элементы
  //arr.splice(index[, deleteCount, elem1, ..., elemN])
  //Он начинает с позиции index, удаляет deleteCount элементов и вставляет elem1, ..., 
  //elemN на их место. 
  //Возвращает новый массив из удалённых элементов.
//filter создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую 
//в передаваемой функции
//find возвращает значение первого найденного в массиве элемента, 
//которое удовлетворяет условию переданному в callback функции





















