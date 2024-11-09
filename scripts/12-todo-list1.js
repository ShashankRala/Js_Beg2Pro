const todoList=[
  {
  name:'make dinner',
  dueDate:'2024-12-22'
},{
    name:'fill water',
    dueDate:'2024-12-21'
  }
];

renderTodoList();


function renderTodoList(){
  let todoListHTML = '';

// below code will be switch to .forEach
todoList.forEach((todoObject,index)=>{
  // const todoObject= todoList[i];
  // const name = todoObject.name;
  // const dueDate = todoObject.dueDate;  by destructuring we wrote in below code
 
  // const {name}=todoObject.name;
  // const {dueDate}=todoObject.dueDate; //in more simple form
  const {name,dueDate}=todoObject;
// separe into 3 elements
 
  const html = `
 <div> ${name}</div>  
 <div>${dueDate}</div>
<button
 onclick="
todoList.splice(${index},1);
renderTodoList();
"class ="delete-todo-button
">Delete</button>
  `;
  //thi is called Generating the HTML 
  todoListHTML += html;
});

//for loop
 /* for(let i=0;i< todoList.length;i++)
  {
    const todoObject= todoList[i];
    // const name = todoObject.name;
    // const dueDate = todoObject.dueDate;  by destructuring we wrote in below code
   
    // const {name}=todoObject.name;
    // const {dueDate}=todoObject.dueDate; //in more simple form
    const {name,dueDate}=todoObject;
// separe into 3 elements
   
    const html = `
   <div> ${name}</div>  
   <div>${dueDate}</div>
  <button
   onclick="
  todoList.splice(${i},1);
  renderTodoList();
  "class ="delete-todo-button
  ">Delete</button>
    `;
    //thi is called Generating the HTML 
    todoListHTML += html;
  }*/

  // console.log(todoListHTML);

  document.querySelector('.js-todo-list').innerHTML=todoListHTML;

}


function addTodo() {
  const inputElement =  document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');

  const dueDate =dateInputElement.value;

//   console.log(name);
  todoList.push(
    {
    //   name:name,
    //   dueDate: dueDate
    name,dueDate
  }
  );
  // console.log(todoList);
  inputElement.value='';//this makes textbox empty after adding

  renderTodoList();
}