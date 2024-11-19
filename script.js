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