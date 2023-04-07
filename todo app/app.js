const container = document.querySelector('.container');
const inputTodo = document.querySelector('#inputTodo');
const todoForm = document.querySelector('.todo-form');
const todolist = document.querySelector('#lists');
const todoAlart = document.querySelector('#message');



todoForm.addEventListener('submit', (e) => {
  const todoValue = inputTodo.value;
  const todoId = Date.now().toString();
  
   todoEleament(todoId, todoValue);
   showAllart('todo is added', 'success');
   e.preventDefault();  

// add to localStoreg

const todos = getTodoLoclastorage();
  todos.push({todoId, todoValue});
  localStorage.setItem('myTodos', JSON.stringify(todos));

  inputTodo.value = "";

})
const getTodoLoclastorage = () => {
  return localStorage.getItem('myTodos') ? JSON.parse(localStorage.getItem('myTodos')) : [];
}



const todoEleament = (todoId, todoValue) => {
  const todoElementCreate = document.createElement('li');

  todoElementCreate.id = todoId;
  todoElementCreate.innerHTML = `
   <span>${todoValue}</span>
   <span><button class="btn" id="deletebutton"> <i class="fa fa-trash" </button></span>
  `;
  todolist.appendChild(todoElementCreate);
  todoElementCreate.classList.add('li-style');

   const deleteTodo = todoElementCreate.querySelector('#deletebutton');
   deleteTodo.addEventListener('click', deleteBtn)
}



const deleteBtn = (event) => {
 const selectedTod = event.target.parentElement.parentElement.parentElement;
 console.log(selectedTod);
todolist.removeChild(selectedTod);
showAllart('todo is delete', 'danger')


let todos = getTodoLoclastorage();
todos = todos.filter((todo) => todo.todoId !== selectedTod.id);
localStorage.setItem('myTodos', JSON.stringify(todos));
}



const showAllart = (text, status) => {
  todoAlart.textContent = text;
   todoAlart.classList.add(`bg-${status}`);
   setTimeout(() => {
    todoAlart.textContent = '';
    todoAlart.classList.remove(`bg-${status}`);
   },1000)
}

 
const loadtodo = () => {
  let todos =getTodoLoclastorage();
  todos.map((todo) => {
    todoEleament(todo.todoId, todo.todoValue)
  });
}
window.addEventListener('DOMContentLoaded', loadtodo);


// const showAllart = () => {
//   todoAlart.textContent = 'add';
//    todoAlart.classList.add('bg-success');
//    setTimeout(() => {
//     todoAlart.textContent = '';
//     todoAlart.classList.remove('bg-success');
//    },1000)
// }
