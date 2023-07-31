window.onload = () => {

    for(let i = 0; i<localStorage.length; i++){
        const key = localStorage.key(i);

        // Check if the key contains "todoNote-"
        if(key.startsWith("todoNote-")){
            //Get the item from localStorage and add it to the DOM
            const item = localStorage.getItem(key);
            addToDo(item);
        }
    }
    //-------------------------------
}


//-----------------------------------------------------------tool functions-------------------------------------------------------

function addToDo(todoMessage){
    const parent = document.querySelector("#todo-section")

    const div = document.createElement("div")
    const p = document.createElement("p")
    const buttonComplete = document.createElement("button")
    const buttonDelete = document.createElement("button")

    //setting the key as a data attribute on the div element
    const todoNoteValue = localStorage.getItem("todoCounter");
    const newNote = `todoNote-${todoNoteValue}`;
    div.setAttribute("data-key", newNote);


    div.setAttribute("class","basis-full bg-white p-3 m-3 flex flex-row shadow-xl rounded-lg")
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
        
        todoTextSection.style.borderWidth = "3px"
        todoTextSection.style.borderStyle = "solid";
        todoTextSection.style.borderColor = "red";

        todoTextSection.setAttribute("class","bg-white p-2 m-1 shadow-xl rounded-lg w-11/12 text-center animate-pulse")

        setTimeout(() => {
            todoTextSection.setAttribute("class","bg-white p-2 m-1 shadow-xl rounded-lg w-11/12 text-center")
        }, 2000);

    } else {

        if(localStorage.getItem("todoCounter") === null) {
            localStorage.setItem("todoCounter", 0);
            todoTextSection.style.borderStyle = "initial"
            todoTextSection.style.borderColor = "initial"
            todoTextSection.style.borderWidth = "initial"

            //parsing the localStorage todoCounter for its value and incrementing by 1
            localStorage.setItem("todoCounter", parseInt(localStorage.getItem("todoCounter")) + 1);

            //retrieve the value from local storage
            const todoNoteValue = localStorage.getItem("todoCounter");

            //setting a new todo in local storage
            const newNote = `todoNote-${todoNoteValue}`;
            localStorage.setItem(newNote, todoText);

            addToDo(todoText)
        }else{
            todoTextSection.style.borderStyle = "initial"
            todoTextSection.style.borderColor = "initial"
            todoTextSection.style.borderWidth = "initial"

            //parsing the localStorage todoCounter for its value and incrementing by 1
            localStorage.setItem("todoCounter", parseInt(localStorage.getItem("todoCounter")) + 1);

            //retrieve the value from local storage
            const todoNoteValue = localStorage.getItem("todoCounter");

            //setting a new todo in local storage
            const newNote = `todoNote-${todoNoteValue}`;
            localStorage.setItem(newNote, todoText);

            addToDo(todoText)
        }
    }
}

//complete and delete section buttion actions---------------------------------------------------

document.querySelector("#todo-section").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-button")) {
        const parent = event.target.parentElement;

        //get the key from the data attribute and remove the item from localStorage
        const key = parent.getAttribute("data-key");
        console.log(key)
        localStorage.removeItem(key);

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
        parentToMoveTo.append(parent)
    }
});

document.querySelector("#complete-section").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-button")) {
        const parent = event.target.parentElement;

        //get the key from the data attribute and remove the item from localStorage
        const key = parent.getAttribute("data-key");
        localStorage.removeItem(key);

        parent.remove();

        currentTodoCounter = localStorage.getItem("todoCounter")
        localStorage.setItem("todoCounter",`${currentTodoCounter-1}`)
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
        parentToMoveTo.append(parent)
    }
});






//-----------------------------------------------------------------------------------------------
















