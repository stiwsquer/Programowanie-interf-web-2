"use strict";

//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const dateField = document.querySelector(".date");
const searchField = document.querySelector(".search");
//dateField.readOnly = true;


//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo)

//Functions
function addTodo(event){

    //Prevent form from submitting
    event.preventDefault();
    
    let value = todoInput.value.trim();
    console.log(value);
    if(value === ""){  
        return;
    }
    
   //Todo DIV
   const todoDiv = document.createElement('div');
   todoDiv.classList.add("todo");
   //Create LI
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add("todo-item");
   todoDiv.appendChild(newTodo);
   //Check mark button
   const completedButton = document.createElement('button');
   completedButton.innerHTML = '<i class="fas fa-check"></i>';
   completedButton.classList.add("complete-btn");
   todoDiv.appendChild(completedButton);
   //Check trash button
   const trashButton = document.createElement('button');
   trashButton.innerHTML = '<i class="fas fa-trash"></i>';
   trashButton.classList.add("trash-btn");
   todoDiv.appendChild(trashButton);
   //Append to list
   todoList.appendChild(todoDiv);
   //crear Todo INPUT VALUE
   todoInput.value = "";
}

function deleteCheck(event){

    const item = event.target;
    
    //cross text out
    // if(item.classList[0] == 'todo-item'){
    //     item.innerHTML = item.innerText.strike();
    // }
    //delete todo
    if(item.classList[0] === "trash-btn" && confirm("Are you sure you want to delete this element?")){
       const todo = item.parentElement;
       //Animation
       todo.classList.add("fall");
       todo.addEventListener('transitionend', function(){
           todo.remove();
       })
    }

    if(item.classList[0] === "complete-btn"){

        
           //if( item.classList[0] === "completed"){
            //get date and time
            let today = new Date();
            let month = today.getMonth() +1;
            let year =  today.getFullYear();
            let day = today.getDate(); 
            let hours = addZeroToDate(today.getHours());
            let minutes = addZeroToDate(today.getMinutes());
            let sec = addZeroToDate(today.getSeconds());
            let current_time = `${hours}:${minutes}:${sec} ${month}/${day}/${year}`;
            console.log(current_time);
            
            dateField.innerHTML = `${current_time}`;
        //}

        const todo = item.parentElement;
        todo.classList.toggle("completed");
     
    }
}

function addZeroToDate(num){
    return num < 10 ? `0${num}`:num;
}

function filterTodo(event){
    const todos = todoList.childNodes;
    
    todos.forEach(function(todo){
        switch(event.target.value){
            case "all":
                if(todo.style != null){
                    todo.style.display = "flex";
                }
                break;
            case "completed":
                if(todo.classList != null){
                    if(todo.classList.contains("completed")){
                        todo.style.display = "flex";
                    }else{
                        todo.style.display = "none";
                    }
                }
                break;
            case "uncompleted":
                if(todo.classList != null ){
                    if(!todo.classList.contains("completed")){
                        todo.style.display = "flex";
                    }else{
                        todo.style.display = "none";
                    }
                }
                break;
        }
    });
}

function serchList(event){
    var value = searchField.value;
    console.log(todoList.options);

    var items = document.querySelectorAll(".todo-list li");
    var tab = [];

    // for(var i=0; i< items.length-1; i++){
    //     tab.push(items[i].innerHTML)

    //     var st=items.options[i].innerText;
    //     if(st.searchField)
    // }

    console.log(items.length);
    console.log(tab[0]);
}