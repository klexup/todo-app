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

        emptyTodoChecks()
    }


    
    //-----------------------------------------------------------tool functions-------------------------------------------------------
function emptyTodoChecks(){
    const left = document.querySelector("#todo-section")
    const right = document.querySelector("#complete-section")

    if(left.firstElementChild === null){
        const div = document.createElement("div")
        const p = document.createElement("p")

        div.setAttribute("class","basis-full h-52 bg-white p-5 m-5 flex flex-row shadow-xl rounded-lg")
        div.setAttribute("data-none","no todos")
        p.setAttribute("class","todo-item flex-grow bg-blue-300 m-0.5 py-5 rounded-lg shadow-md text-center self-center text-xl")
        p.innerText = "Add a todo to show up here!";
        
        div.append(p)
    //appending that div to the parent container
            left.append(div)
    }else{
        if (left.firstElementChild && left.firstElementChild.dataset.none === "no todos") {
            left.firstElementChild.remove();
        }
        }

    if(right.firstElementChild === null){
        const div = document.createElement("div")
        const p = document.createElement("p")

        div.setAttribute("class","basis-full h-52 bg-white p-5 m-5 flex flex-row shadow-xl rounded-lg")
        div.setAttribute("data-none","no todos")
        p.setAttribute("class","todo-item flex-grow bg-blue-300 m-0.5 py-5 rounded-lg shadow-md text-center self-center text-xl")
        p.innerText = "Completed todos show up here!";
        
        div.append(p)
    //appending that div to the parent container
        right.append(div)
    }else{
            if(right.firstElementChild && right.firstElementChild.dataset.none === "no todos"){
                right.firstElementChild.remove()
            }
    }
}

function emptyTodoChecksLeft(){
    const left = document.querySelector("#todo-section")
    if(left.firstElementChild === null){
        const div = document.createElement("div")
        const p = document.createElement("p")

        div.setAttribute("class","basis-full h-52 bg-white p-5 m-5 flex flex-row shadow-xl rounded-lg")
        div.setAttribute("data-none","no todos")
        p.setAttribute("class","todo-item flex-grow bg-blue-300 m-0.5 py-5 rounded-lg shadow-md text-center self-center text-xl")
        p.innerText = "Add a todo to show up here!";
        
        div.append(p)
    //appending that div to the parent container
            left.append(div)
    }else{
        if (left.firstElementChild && left.firstElementChild.dataset.none === "no todos") {
            left.firstElementChild.remove();
        }
        }
}

function emptyTodoChecksRight(){
    const right = document.querySelector("#complete-section")
    if(right.firstElementChild === null){
        const div = document.createElement("div")
        const p = document.createElement("p")

        div.setAttribute("class","basis-full h-52 bg-white p-5 m-5 flex flex-row shadow-xl rounded-lg")
        div.setAttribute("data-none","no todos")
        p.setAttribute("class","todo-item flex-grow bg-blue-300 m-0.5 py-5 rounded-lg shadow-md text-center self-center text-xl")
        p.innerText = "Completed todos show up here!";
        
        div.append(p)
    //appending that div to the parent container
        right.append(div)
    }else{
            if(right.firstElementChild && right.firstElementChild.dataset.none === "no todos"){
                right.firstElementChild.remove()
            }
    }
}

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
    emptyTodoChecks()
}


function createNewTodo(todoMessage){
    emptyTodoChecks()
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
    emptyTodoChecks()
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
        emptyTodoChecksLeft()
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
        emptyTodoChecks()
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
        emptyTodoChecksRight()
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
        emptyTodoChecks()
    }
});






//-----------------------------------------------------------------------------------------------
