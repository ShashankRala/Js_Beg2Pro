const todoList=['make dinner','fill water'];

renderTodoList();


function renderTodoList(){
  let todoListHTML = '';

  for(let i=0;i< todoList.length;i++)
  {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;//thi is called Generating the HTML 
    todoListHTML += html;
  }

  console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML=todoListHTML;

}


function addTodo() {
  const inputElement =  document.querySelector('.js-name-input');
  const name = inputElement.value;
//   console.log(name);
  todoList.push(name);
  console.log(todoList);
  inputElement.value='';//this makes textbox empty after adding

  renderTodoList();
}