// Adicionar uma nova tarefa
function addTask() {
    const taskInput = document.getElementById("task-input");
    const prioritySelect = document.getElementById("priority-select");
    const taskList = document.getElementById("task-list");

    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;

    if (taskText === "") {
        alert("Por favor, insira uma atividade!");
        return;
    }

    // Criar novo item de tarefa
    const li = document.createElement("li");
    li.className = getPriorityClass(priority); // Adicionar classe com cor baseada na prioridade

    li.innerHTML = `
        <span>${taskText}</span>
        <div class="actions">
            <button onclick="editTask(this)">✏️</button>
            <button onclick="removeTask(this)">❌</button>
            <button onclick="completeTask(this)">✅</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

// Definir a classe com base na prioridade
function getPriorityClass(priority) {
    switch (priority) {
        case "Alta":
            return "priority-high";
        case "Média":
            return "priority-medium";
        case "Baixa":
            return "priority-low";
        default:
            return "";
    }
}

// Editar uma tarefa
function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector("span").textContent;
    const newTask = prompt("Editar tarefa:", taskText);

    if (newTask !== null && newTask.trim() !== "") {
        taskItem.querySelector("span").textContent = newTask.trim();
    }
}

// Remover uma tarefa
function removeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}

// Concluir uma tarefa
function completeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.style.textDecoration = "line-through";
    taskItem.style.opacity = "0.6"; // Visualmente mostrar que está concluída
}
