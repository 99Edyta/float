
function handleAddTodo() {
    const input = document.getElementById("todoText");
    const todoText = input.value.trim();

    if (todoText === "") {
        return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = todoText;
    document.getElementById("todos").appendChild(listItem);
    input.value = "";
}

const btnAddTodo = document.getElementById("btnAddTodo");
btnAddTodo.addEventListener("click", handleAddTodo);

document.getElementById("todoText").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        handleAddTodo();
    }
});