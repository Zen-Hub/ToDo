const taskInput = document.getElementById('task-input');
const addButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');
const tasks = [];


// Создаем элемент списка задач
function createTaskElement(taskText) {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task-item');

  const taskTextElement = document.createElement('div');
  taskTextElement.classList.add('task-text');
  taskTextElement.textContent = taskText;
  taskElement.appendChild(taskTextElement);

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-task-button');
  deleteButton.textContent = 'Удалить';
  taskElement.appendChild(deleteButton);

  //возвращаем в точку вызова пустой элемент
  return taskElement;
}


// Добавляем задачу с текстом при клике на кнопку "Добавить"
addButton.addEventListener('click', () => {
  const inputText = taskInput.value.trim();
  if (!inputText) return;

  //Вызываем функцию с текстом из инпута
  createTaskElement(inputText)

  // Присваиваем вызов в переменную
  const taskElement = createTaskElement(inputText);
  console.log(taskElement)

  // Добавляем элемент списка задач с текстом в список
  taskList.appendChild(taskElement);


  // Добавляем задачу в массив задач и сохраняем его в localStorage
  tasks.push({ text: inputText });



  console.log(tasks)

  saveTasks();

  // Очищаем поле ввода
  taskInput.value = '';
});


// Получаем индекс задачи из элемента списка задач
function getIndexFromTaskElement(taskElement) {
  let index = null;


  //task-list общий блок --> task-item
  Array.from(taskList.children).forEach((item, i) => {

    if (item === taskElement) {
      index = i;
    }
  });
  return index;
}


// Удаляем задачу при клике на кнопку "Удалить"
taskList.addEventListener('click', event => {
  if (event.target.classList.contains('delete-task-button')) {
    const taskIndex = getIndexFromTaskElement(event.target.parentElement);
    if (taskIndex !== null) {
      // Удаляем элемент списка задач
      event.target.parentElement.remove();

      // Удаляем задачу из массива задач и сохраняем его в localStorage
      tasks.splice(taskIndex, 1);

      //Перезаписываем удаление в localStorage
       saveTasks();
    }
  }
});


//Сохраняем массив задач в localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Загружаем задачи из localStorage
function loadTasks() {

  //Получаем задачу из localStorage
  const savedTasks = JSON.parse(localStorage.getItem('tasks'));
  
  if (savedTasks) {
    tasks.push(...savedTasks);
    tasks.forEach(task => {
      const taskElement = createTaskElement(task.text);
      taskList.appendChild(taskElement);
    });
  }
}

// Загружаем задачи из localStorage при загрузке страницы
loadTasks();

//Список используемого ----------------------------------
//insertAdjacentHTML вставит заданный элемент в HTML
//focus() ставит фокус в заданную область
//target.dataset находит по атрибуту
//closest ищет родителя по классу или тегу
//remove() удалит тег
//localStorage('key',data)  храним в браузере данные
//localStorage.setItem('key',data) - сохранили данные в браузере
//localStorage.getItem('key',data) - вытащили данные из браузера
//findIndex(function(task) - запускает функцию для каждого элемента массива и по условию находит нужный условие обязательно
//splice  Умеет всё: добавлять, удалять и заменять элементы
//arr.splice(index[, deleteCount, elem1, ..., elemN]) Он начинает с позиции index, удаляет deleteCount элементов и вставляет elem1, ...,elemN на их место. Возвращает новый массив из удалённых элементов.
//filter создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции
//find возвращает значение первого найденного в массиве элемента, которое удовлетворяет условию переданному в callback функции
//forEach() выполняет указанную функцию один раз для каждого элемента в массиве
