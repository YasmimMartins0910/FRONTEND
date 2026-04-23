const opcoes = document.querySelectorAll('.opcao');
const resultado = document.querySelector('#resultado');

opcoes.forEach(function (opcao) {
  opcao.addEventListener('click', function () {
    opcoes.forEach(function (item) {
      item.classList.remove('certa');
      item.classList.remove('errada');
      item.disabled = true;
    });

    const respostaCorreta = document.querySelector('.correta');
    respostaCorreta.classList.add('certa');

    if (opcao.classList.contains('correta')) {
      resultado.textContent = '🎉 Acertou!';
    } else {
      opcao.classList.add('errada');
      resultado.textContent = '❌ Errou!';
    }
  });
});
