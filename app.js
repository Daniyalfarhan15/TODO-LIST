let todoInput = document.querySelector('.new-todo');
let todoListDiv = document.querySelector('.todo-list');
let allTodos = [];

let editTodoDiv = document.getElementById('edit-todo-container');
let addTodoDiv = document.getElementById('add-new-todo-container');
let editTodoInput = document.querySelector('.edit-todo');
let editIndex;

function add() {
    let todoVal = todoInput.value;
    allTodos.push(todoVal);
    printAllTodos();
    todoInput.value = '';
}

function printAllTodos() {
    todoListDiv.innerHTML = "";
    for (let i = 0; i < allTodos.length; i++) {
        todoListDiv.innerHTML += `
            <p id="todo-${i}">
                ${allTodos[i]}
                <i onclick="editTodo(${i})" class="fa-regular fa-pen-to-square edit"></i>
                <i onclick="deleteTodo(${i})" class="fa-solid fa-trash delete"></i>
            </p>
        `;
    }
}

function deleteTodo(index) {
    allTodos.splice(index, 1);
    printAllTodos();
}

function editTodo(index) {
    if (editIndex !== undefined) {
        alert("Please save your changes before editing another todo.");
        return;
    }
    editIndex = index;
    toggleTodoForm();
    editTodoInput.value = allTodos[index];
}

function updateTodo() {
    toggleTodoForm();
    allTodos.splice(editIndex, 1, editTodoInput.value);
    printAllTodos();
    editIndex = undefined;
}

function cancelEdit() {
    toggleTodoForm();
    editIndex = undefined;
}

let isEditing = false;
function toggleTodoForm() {
    if (!isEditing) {
        editTodoDiv.classList.remove("hide");
        addTodoDiv.classList.add("hide");
    }
    else {
        editTodoDiv.classList.add("hide");
        addTodoDiv.classList.remove("hide");
    }
    isEditing = !isEditing;
}