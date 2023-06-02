const botoes = document.querySelectorAll('.btn');

botoes.forEach(botao => botao.addEventListener('click', filtrarPorCategoria))

function filtrarPorCategoria(){
    const elementoBotao = document.getElementById(this.id)
    const categoria = elementoBotao.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)
    exibirLivrosNaTela(aplicarDesconto(livrosFiltrados))
}