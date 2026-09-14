function criarCarrossel(seletorContainer, tempoTroca = 2000) {
  const container = document.querySelector(seletorContainer)
  if (!container) return

  const grupos = container.querySelectorAll('.grupo')
  let indiceAtual = 0

  grupos[0].classList.add('ativo')

  setInterval(() => {
    grupos[indiceAtual].classList.remove('ativo')
    indiceAtual = (indiceAtual + 1) % grupos.length
    grupos[indiceAtual].classList.add('ativo')
  }, tempoTroca);
}

document.addEventListener('DOMContentLoaded', () => {
  criarCarrossel('.container.um', 2000)
  criarCarrossel('.container.dois', 2000)
  criarCarrossel('.container.tres', 2000)
});