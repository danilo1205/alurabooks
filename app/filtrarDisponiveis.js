const btnDisp = document.getElementById('btnLivrosDisponiveis')

btnDisp.addEventListener('click', filtrarDisponiveis)

function filtrarDisponiveis(){
    var livrosDisponiveis = livros.filter(livro => livro.quantidade > 0)
    exibirLivrosNaTela(aplicarDesconto(livrosDisponiveis))
}