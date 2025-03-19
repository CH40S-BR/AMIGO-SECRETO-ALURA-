let elemAmigo = document.getElementById("nome-amigo"); // Input
let elemListaAmigos = document.getElementById("amigos-lista"); // Lista de amigos
let modal = document.getElementById("resultadoModal"); // Modal
let modalTexto = document.getElementById("resultadoTexto"); // Texto do modal

let amigos = [];

// Função para adicionar amigo à lista
function adicionar() {
  const amigo = elemAmigo.value.trim();
  if (amigo && !amigos.includes(amigo.toUpperCase())) {
    amigos.push(amigo.toUpperCase());
    atualizarListaAmigos();
    elemAmigo.value = "";
  }
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
  elemListaAmigos.innerHTML = ''; // Limpa a lista antes de adicionar novamente
  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    
    // Criação do botão de excluir
    const deleteButton = document.createElement("button");
    deleteButton.textContent = 'Excluir';
    deleteButton.classList.add('secondary');
    deleteButton.onclick = function() {
      excluir(amigo);
    };
    
    li.appendChild(deleteButton);
    elemListaAmigos.appendChild(li);
  });
}

// Função para excluir amigo da lista
function excluir(amigo) {
  amigos = amigos.filter(a => a !== amigo);
  atualizarListaAmigos();
}

// Função para sortear um único amigo aleatório
function sortear() {
  if (amigos.length < 1) {
    alert("Adicione pelo menos um amigo para sortear!");
    return;
  }

  const sorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Sorteia um amigo aleatório

  modalTexto.innerHTML = `O amigo secreto sorteado é: <strong>${sorteado}</strong>`;  // Exibe o nome sorteado no modal
  abrirModal();  // Exibe o modal
}

// Função para reiniciar
function reiniciar() {
  amigos.length = 0;  // Limpa o array de amigos
  atualizarListaAmigos();  // Atualiza a lista na tela
  elemAmigo.value = "";  // Limpa o campo de entrada
}

// Função para abrir o modal
function abrirModal() {
  modal.style.display = "flex";  // Exibe o modal
}

// Função para fechar o modal
function fecharModal() {
  modal.style.display = "none";  // Fecha o modal
}

// Fecha o modal ao clicar fora dele
window.onclick = function (event) {
  if (event.target === modal) {
    fecharModal();
  }
}
