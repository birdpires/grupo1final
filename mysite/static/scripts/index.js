function abrirChat() {
  var modal = document.getElementById("chatModal");
  modal.style.display = "block";
}

function fecharModal() {
  var modal = document.getElementById("chatModal");
  modal.style.display = "none";
}


const duvida = document.getElementById('duvida');
const perguntaInput = document.getElementById('pergunta');

// Defindo para qual cidade o chat vai dar uam resposta que já escrevi antes 
const perguntasRespostas = [
{ Produto: 'Maceió', resposta: 'A capital do estado de Alagoas FAZ parte do nosso projeto.' },
{ Produto: 'São Paulo', resposta: 'Nosso Projeto funciona na Maior cidade do País. ' },
{ Produto: 'Rio', resposta: 'Os cariocas também são contemplados com nosso projeto!' },
{ Produto: 'Penedo', resposta: 'O interior de Alagoas é uma das cidades em que nosso projeto funciona.'},
{ Produto: 'Belém', resposta: 'A capital do Pará pode contar com nossa ajuda pois funcionamos lá.'},
{ Produto: 'Brasilia', resposta: 'Também estamos presente na capital do país.'},
{ Produto: 'Manaus', resposta: 'Esramos alimentado solidariedade em Manaus também.'},
{ Produto: 'Goiania', resposta: 'A capital de Goiás também é uma das cidades em que nosso projeto funciona.'},
{ Produto: 'Salvador', resposta: 'Lá ele! Achou que não estariamos na capital da Bahia? Errou rude.'},
{ Produto: 'Aracaju', resposta: 'A capital sergipana é um dos nossos pontos de funcionamento.'},
];

// Essa função serve pra resposta coincidir com a cidade digitada
function obterResposta(Produto) {
// Vai percorrer a lista com as cidades
for (let i = 0; i < perguntasRespostas.length; i++) {
  // Verifica se a cidade corresponde ta na lista
  if (perguntasRespostas[i].Produto.toLowerCase() === Produto.toLowerCase()) {
    // Retorna a resposta correspondente
    return perguntasRespostas[i].resposta;
  }
}
// Retorna uma mensagem de resposta padrão caso nenhuma correspondência seja encontrada
return 'A Doefood ainda não tem recursos para operar nesta cidade. Mas isso não te impede de doar! Faça uma doação.';
}

// Função para enviar a pergunta e exibir a resposta na tela
function enviarPergunta() {
const pergunta = document.getElementById('pergunta').value;

const resposta = obterResposta(pergunta);

// Cria um novo elemento de parágrafo para exibir a pergunta e a resposta do cara
const novoElemento = document.createElement('p');
novoElemento.innerHTML = `<strong>Você:</strong> ${pergunta}<br><strong>DoeFood:</strong>${resposta}`;

// Adiciona o novo elemento ao modal
const duvida = document.getElementById('duvida');
duvida.appendChild(novoElemento);

// Limpa o campo de pergunta após o envio pra ficar branquin
document.getElementById('pergunta').value = '';
}


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); 
}

function changeSlide(n) {
  slideIndex += n;
  var slides = document.getElementsByClassName("slide");
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
