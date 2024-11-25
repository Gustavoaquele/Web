const modal = document.getElementById('modal-confirm');
const confirmBtn = document.getElementById('btn-confirm');
const negBtn = document.getElementById('btn-negar');
let actionToConfirm=null;

function AbrirModal(message,action){
    modal.style.display='flex';
    document.getElementById('mensagem-modal').textContent = message;
    actionToConfirm = action;
}

function FecharModal(){
    modal.style.display='none';
    actionToConfirm=null;
}

function ConfirmAction(){
    if (actionToConfirm){
        actionToConfirm();
        FecharModal();
    }
}

confirmBtn.addEventListener('click',ConfirmAction);
negBtn.addEventListener('click',FecharModal);

function AdicionarTarefa(){
    const inputBarrinha = document.getElementById("input-barrinha");
    const SelectPrioridade = document.getElementById("prioridade");
    const ListaTarefa = document.getElementById("ListaAtividade");

    const TextoInput = inputBarrinha.ariaValueMax.trim();
    const prioridade = SelectPrioridade.value;
    
    if (TextoInput === ""){
        alert("Por favor insira uma atividade!");
        return;

    }
    const li =document.createElement("li");
    li.className = getPriorityClass(prioridade);

    li.innerHTML = `
        <span>${TextoInput}</span>
        <div class="Acao">
            <button onclick="editTask(this)">✏</button>
            <button onclick="RemoveTask(this)">❌ </button>
            <button onclick="CompleteTask(this)"> ✅</button>
        </div>
        `;

        li.addEventListener('click',function(){
            changePriority(li);
        })

        ListaTarefa.appendChild(li);
        inputBarrinha.value = "";
    }

    function getPriorityClass(prioridade){
        switch(prioridade){
            case 'Alta': return 'high';
            case 'Media': return "med";
            case 'Baixa': return "low";
            default: return '';
        }
    }





















    function changePriority(taskItem) {
        if (taskItem.classList.contains('Alta')) {
            taskItem.classList.remove('Alta');
            taskItem.classList.add('Media');
        } else if (taskItem.classList.contains('Media')) {
            taskItem.classList.remove('Media');
            taskItem.classList.add('Baixa');
        } else if (taskItem.classList.contains('Baixa')) {
            taskItem.classList.remove('Baixa');
            taskItem.classList.add('Alta');
        }
    }
    function removeTask(button) {
        const taskItem = button.parentElement.parentElement;
        taskItem.remove();
    }
    
    function completeTask(button) {
        const taskItem = button.parentElement.parentElement;
        taskItem.style.textDecoration = "line-through";
    }
    function editTask(button) {
        const taskItem = button.parentElement.parentElement;
        const taskText = taskItem.querySelector("span").textContent;
        const newTask = prompt("Editar tarefa:", taskText);
        if (newTask !== null && newTask.trim() !== "") {
            taskItem.querySelector("span").textContent = newTask.trim();
        }
    }
    
    