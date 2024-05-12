// 1.create a function to make a fetch request to get todos from api

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
  /* 
  2. make a fetch request of get , and get 15 todos and then make it json data
  then pass that data to another .then and run a forEach loop on it 
  take each todo and pass it on the function putItemToDom which put it on DOM.
  */


  fetch(apiUrl + '?_limit=15')
    .then(res => res.json())
    .then(data => {
      data.forEach(todo => putItemToDom(todo));

    });

};


//make a function which add items to DOM
const putItemToDom = (todo) => {

  const div = document.createElement('div');
  div.classList.add('todo');
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute('data-id', todo.id);
  if (todo.completed) {

    div.classList.add('done');

  }

  document.getElementById('todo-list').appendChild(div);

};

/* 
3. make a function which run on when click on "add"
this will take input text and make an object and we will send to server 
we will make a POST request to server with newTodo as a body
 */



const createTodo = (e) => {
  e.preventDefault();
  const newTodo = {
    title: e.target.firstElementChild.value,
    completed : false
     
  };

     fetch(apiUrl,{
      method:'POST',
      body: JSON.stringify(newTodo),
      headers:{
        'Content_type': 'application/json'
      }
     })
     //this return us a newly created object and we can show it on yhe DOM
     .then(res=>res.json())
     .then(data=> putItemToDom(data))


};


//4.


const toggleCompleted=(e)=>{
  if (e.target.classList.contains('todo')) {
     
    e.target.classList.toggle('done');
    // console.log(e.target.dataset.id);
    //now call the function which update the status of todo on server
    updateTodo(e.target.dataset.id, e.target.classList.contains('done'));

  }
}


//make a function to update

const updateTodo = (id,completed)=>{
  // console.log(id,completed);
  fetch(`${apiUrl}/${id}`,{
    method:'PUT',
    body:JSON.stringify({completed}),
    headers:{
      'Content-Type':'application/json'
    }
  })
  .then(res=>res.json())
  .then(data=>console.log(data))

}



//make a function to send request of delete
const deleteTodo=(e)=>{

  if (e.target.classList.contains('todo')) {
     
    console.log('deleted todo ');
   const id = e.target.dataset.id;
   fetch(`${apiUrl}/{id}`,{
    method:'DELETE',

   })
   .then(res=>res.json())
   .then(()=>e.target.remove())


}

}












const init = () => {

  document.addEventListener('DOMContentLoaded', getTodos);
  document.querySelector('#todo-form').addEventListener('submit', createTodo);
  document.querySelector('#todo-list').addEventListener('click', toggleCompleted);
  document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
};


init();




