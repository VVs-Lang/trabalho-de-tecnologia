document.addEventListener('DOMContentLoaded', function() {
  const botao = document.getElementById('botao-acessibilidade');
  const opcoes = document.getElementById('opcoes-acessibilidade');

  botao.addEventListener('click', function() {
    botao.classList.toggle('rotacao-botao');
    opcoes.classList.toggle('apresenta-lista');
    const expanded = botao.getAttribute('aria-expanded') === 'true';
    botao.setAttribute('aria-expanded', !expanded);
  });

  // botões de acessibilidade
  let tamanhoAtual = 1;
  document.getElementById('aumentar-fonte').addEventListener('click', function() {
    tamanhoAtual += 0.1;
    document.body.style.fontSize = `${tamanhoAtual}rem`;
  });

  document.getElementById('diminuir-fonte').addEventListener('click', function() {
    tamanhoAtual -= 0.1;
    document.body.style.fontSize = `${tamanhoAtual}rem`;
  });

  document.getElementById('alterna-contraste').addEventListener('click', function() {
    document.body.classList.toggle('alto-contraste');
  });
});

// Animações ScrollReveal
ScrollReveal().reveal('#inicio', { delay: 500 });
ScrollReveal().reveal('#rapgeek', { delay: 500 });
ScrollReveal().reveal('#galeria', { delay: 500 });
ScrollReveal().reveal('#contato', { delay: 500 });

