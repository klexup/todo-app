const STORAGE_KEY = 'todos'
if (localStorage.getItem(STORAGE_KEY) == null || localStorage.getItem(STORAGE_KEY) == undefined){
localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
} 
const ARRAY_OF_TODOS = JSON.parse(localStorage.getItem(STORAGE_KEY))

window.onload = () => {
    ARRAY_OF_TODOS.forEach((todoItem) => {
        const id = todoItem['todo-id'];
        const completed = todoItem['completed'];
        const todoMessage = todoItem['todo-message'];
        renderTodos(todoMessage,id,completed)
    });
}


//-----------------------------------------------------------tool functions-------------------------------------------------------
function renderTodos(todoText,todoId,todoComplete){
    const todoMessage = todoText
    const ID = todoId
    const complete = todoComplete

    if(complete===true){
        const parent = document.querySelector("#complete-section")
        const div = document.createElement("div")
        const p = document.createElement("p")
        const buttonComplete = document.createElement("button")
        const buttonDelete = document.createElement("button")
    //--------------------------------------------------------------------------------------------------------------------------
        div.setAttribute("class","basis-full bg-white p-3 m-3 flex flex-row shadow-xl rounded-lg")
        div.style.backgroundColor = "#22c55e"
        div.setAttribute("data-id",`${ID}`)
        p.setAttribute("class","todo-item basis-9/12 bg-blue-300 m-0.5 p-0.5 rounded-lg shadow-md")
        buttonComplete.setAttribute("class","complete-button todo-item max-h-10 self-center basis-3/12 bg-blue-300 m-0.5 p-0.5 rounded-lg shadow-md border-2 border-blue-500 hover:border-2 hover:border-solid hover:border-blue-900")
        buttonDelete.setAttribute("class","delete-button todo-item max-h-10 self-center basis-3/12 bg-red-500 m-0.5 p-0.5 rounded-lg shadow-md border-2 border-red-500 hover:border-2 hover:border-solid hover:border-red-900")
    //appending all inner components of a new todo to the div & setting the innerText on the todo
    
        p.innerText = todoMessage;
    
        buttonComplete.innerText = "undo";
        buttonDelete.innerText = "delete";
    
        div.append(p)
        div.append(buttonComplete)
        div.append(buttonDelete)
    //appending that div to the parent container
        parent.append(div)
    }else{
        const parent = document.querySelector("#todo-section")
        const div = document.createElement("div")
        const p = document.createElement("p")
        const buttonComplete = document.createElement("button")
        const buttonDelete = document.createElement("button")
    //--------------------------------------------------------------------------------------------------------------------------
        div.setAttribute("class","basis-full bg-white p-3 m-3 flex flex-row shadow-xl rounded-lg")
        div.setAttribute("data-id",`${ID}`)
        p.setAttribute("class","todo-item basis-9/12 bg-blue-300 m-0.5 p-0.5 rounded-lg shadow-md")
        buttonComplete.setAttribute("class","complete-button todo-item max-h-10 self-center basis-3/12 bg-green-500 m-0.5 p-0.5 rounded-lg shadow-md border-2 border-green-500 hover:border-2 hover:border-solid hover:border-green-900")
        buttonDelete.setAttribute("class","delete-button todo-item max-h-10 self-center basis-3/12 bg-red-500 m-0.5 p-0.5 rounded-lg shadow-md border-2 border-red-500 hover:border-2 hover:border-solid hover:border-red-900")
    //appending all inner components of a new todo to the div & setting the innerText on the todo
    
        p.innerText = todoMessage;
    
        buttonComplete.innerText = "complete";
        buttonDelete.innerText = "delete";
    
        div.append(p)
        div.append(buttonComplete)
        div.append(buttonDelete)
    //appending that div to the parent container
        parent.append(div)
    }
}


function createNewTodo(todoMessage){
    //creating json todo and pushing it to ARRAY_OF_TODOS and then updating the localStorage by saving the updated array
    const ID = Date.now()
    const COMPLETED = false

    const newTodoJson = {
                        "todo-message": todoMessage,
                        "todo-id": ID, 
                        "completed": COMPLETED
                        }

    ARRAY_OF_TODOS.push(newTodoJson)
    localStorage.setItem(STORAGE_KEY,JSON.stringify(ARRAY_OF_TODOS))

    //------------------------------------------------------------------------
    const parent = document.querySelector("#todo-section")
    const div = document.createElement("div")
    const p = document.createElement("p")
    const buttonComplete = document.createElement("button")
    const buttonDelete = document.createElement("button")
//--------------------------------------------------------------------------------------------------------------------------
    div.setAttribute("class","basis-full bg-white p-3 m-3 flex flex-row shadow-xl rounded-lg")
    div.setAttribute("data-id",`${ID}`)
    p.setAttribute("class","todo-item basis-9/12 bg-blue-300 m-0.5 p-0.5 rounded-lg shadow-md")
    buttonComplete.setAttribute("class","complete-button todo-item max-h-10 self-center basis-3/12 bg-green-500 m-0.5 p-0.5 rounded-lg shadow-md border-2 border-green-500 hover:border-2 hover:border-solid hover:border-green-900")
    buttonDelete.setAttribute("class","delete-button todo-item max-h-10 self-center basis-3/12 bg-red-500 m-0.5 p-0.5 rounded-lg shadow-md border-2 border-red-500 hover:border-2 hover:border-solid hover:border-red-900")
//appending all inner components of a new todo to the div & setting the innerText on the todo
    p.innerText = todoMessage;
    buttonComplete.innerText = "complete";
    buttonDelete.innerText = "delete";

    div.append(p)
    div.append(buttonComplete)
    div.append(buttonDelete)
//appending that div to the parent container
    parent.append(div)
}

document.querySelector("#input-todo-button").onclick = ()=>{
    const todoText = document.querySelector("#input-todo").value;
    const todoTextSection = document.getElementById("input-todo");
    if(todoText.length < 1){
        todoTextSection.focus();
        
        todoTextSection.style.borderWidth = "2px"
        todoTextSection.style.borderStyle = "solid";
        todoTextSection.style.borderColor = "red";
        //adding a pulse animation that dissapears after 2 seconds (1 pulse)
        todoTextSection.setAttribute("class","bg-white p-2 m-1 shadow-xl rounded-lg w-11/12 text-center animate-pulse")

        setTimeout(() => {
            todoTextSection.setAttribute("class","bg-white p-2 m-1 shadow-xl rounded-lg w-11/12 text-center")
        }, 2000);

    } else {
            //using createNewTodo when text is at least 1 character long in the input text box{
            todoTextSection.style.borderStyle = "initial"
            todoTextSection.style.borderColor = "initial"
            todoTextSection.style.borderWidth = "initial"

            createNewTodo(todoText)
        }
}

//complete and delete section buttion actions---------------------------------------------------

document.querySelector("#todo-section").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-button")) {
        const parent = event.target.parentElement;
    
        //get the key from the data attribute
        const key = parent.getAttribute("data-id");
        //find the index of the todo item in the ARRAY_OF_TODOS
        const index = ARRAY_OF_TODOS.findIndex(todo => todo["todo-id"] === Number(key));
        //remove the todo item from the ARRAY_OF_TODOS
        ARRAY_OF_TODOS.splice(index, 1);
        //save the updated ARRAY_OF_TODOS back to localStorage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(ARRAY_OF_TODOS));
    
        parent.remove();
    }
    
});

document.querySelector("#todo-section").addEventListener("click", function(event) {
    if (event.target.classList.contains("complete-button")) {
        const parentToMoveTo = document.querySelector("#complete-section")
        const parent = event.target.parentElement;
        const completeButton = parent.querySelector(".complete-button")

        completeButton.setAttribute("class","complete-button todo-item max-h-10 self-center basis-3/12 bg-blue-300 m-0.5 p-0.5 rounded-lg shadow-md border-2 border-blue-500 hover:border-2 hover:border-solid hover:border-blue-900")
        completeButton.innerText="undo"

        parent.style.backgroundColor = "#22c55e"

        // get the todo-id from the parent's data-id attribute
        const todoId = parent.getAttribute("data-id");
        
        // find the corresponding todo item in the ARRAY_OF_TODOS
        const todoItem = ARRAY_OF_TODOS.find(todo => todo["todo-id"] === Number(todoId));

        // update the 'completed' field to true
        todoItem.completed = true;

        // update localStorage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(ARRAY_OF_TODOS));

        parentToMoveTo.append(parent)
    }
});


document.querySelector("#complete-section").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-button")) {
        const parent = event.target.parentElement;
    
        //get the key from the data attribute
        const key = parent.getAttribute("data-id");
        //find the index of the todo item in the ARRAY_OF_TODOS
        const index = ARRAY_OF_TODOS.findIndex(todo => todo["todo-id"] === Number(key));
        //remove the todo item from the ARRAY_OF_TODOS
        ARRAY_OF_TODOS.splice(index, 1);
        //save the updated ARRAY_OF_TODOS back to localStorage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(ARRAY_OF_TODOS));
    
        parent.remove();
    }
});

document.querySelector("#complete-section").addEventListener("click", function(event) {
    if (event.target.classList.contains("complete-button")) {
        const parentToMoveTo = document.querySelector("#todo-section")
        const parent = event.target.parentElement;
        const completeButton = parent.querySelector(".complete-button")

        completeButton.setAttribute("class","complete-button todo-item max-h-10 self-center basis-3/12 bg-green-500 m-0.5 p-0.5 rounded-lg shadow-md border-2 border-green-500 hover:border-2 hover:border-solid hover:border-green-900")
        completeButton.innerText="complete"

        parent.style.backgroundColor = "#fcfcfc"

        // get the todo-id from the parent's data-id attribute
        const todoId = parent.getAttribute("data-id");
        
        // find the corresponding todo item in the ARRAY_OF_TODOS
        const todoItem = ARRAY_OF_TODOS.find(todo => todo["todo-id"] === Number(todoId));

        // update the 'completed' field to true
        todoItem.completed = false;

        // update localStorage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(ARRAY_OF_TODOS));

        parentToMoveTo.append(parent)
    }
});






//-----------------------------------------------------------------------------------------------
















