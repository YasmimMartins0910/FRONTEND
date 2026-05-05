let codigoDigitado = '';
const codigoCorreto = '1234';

const botoesNumeros = document.querySelectorAll('.numero');
const visor = document.querySelectorAll('#visor span');
const botaoAbrir = document.getElementById('abrir');
const mensagem = document.getElementById('mensagem');

botoesNumeros.forEach((botao) => {
  botao.addEventListener('click', () => {
    if (codigoDigitado.length < 4) {
      codigoDigitado += botao.textContent;
      atualizarVisor();
      mensagem.textContent = '';
      mensagem.className = '';
    }
  });
});

function atualizarVisor() {
  visor.forEach((espaco, index) => {
    espaco.textContent = codigoDigitado[index] ? '●' : '';
  });
}

botaoAbrir.addEventListener('click', () => {
  if (codigoDigitado.length < 4) {
    mensagem.textContent = 'Digite os 4 dígitos para abrir o cofre.';
    mensagem.className = 'aviso';
  } else if (codigoDigitado === codigoCorreto) {
    mensagem.textContent = 'Cofre aberto com sucesso!';
    mensagem.className = 'sucesso';
  } else {
    mensagem.textContent = 'Código incorreto. Tente novamente.';
    mensagem.className = 'erro';

    codigoDigitado = '';
    atualizarVisor();
  }
});
