let amigos = [];
let amigoSorteado;
let listaDeAmigosSorteados = [];

function adicionarAmigo() {
  let nome = document.getElementById("amigo").value;
  
  if (!nome.trim()) {
    alert("Por favor, insira um nome.");
  } else {
    amigos.push(nome.trim());
    listarAmigos(amigos);
  }
  limparCampo();
}

function limparCampo() {
  let campo = document.getElementById("amigo");
  campo.value = "";
}

function listarAmigos(amigos) {
  console.log(amigos);
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nome) => {
    let li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  let quantidadeDeAmigos = amigos.length;
  let indiceDoAmigoSorteado = Math.floor(Math.random() * quantidadeDeAmigos);

 
  if (quantidadeDeAmigos > 0) {
    amigoSorteado = amigos[indiceDoAmigoSorteado];

    if (listaDeAmigosSorteados.includes(amigoSorteado)) {
      return sortearAmigo();
    } else {
      listaDeAmigosSorteados.push(amigoSorteado);
      mostrarResultadoNaTela(`Seu amigo secreto é ${amigoSorteado}`);
      return amigoSorteado;
    }
  } else {
    mostrarResultadoNaTela("Adicione mais amigos")
  }
}

function mostrarResultadoNaTela(texto) {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>${texto}</li>`
}
