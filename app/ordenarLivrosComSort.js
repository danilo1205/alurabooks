const botoaOrdenar = document.getElementById('btnOrdenarPorPreco');
botoaOrdenar.addEventListener('click', ordenarLivrosPorPreco);

function ordenarLivrosPorPreco(){
    const livrosOrdenados = livros.sort((a,b)=>a.preco-b.preco)
    exibirLivrosNaTela(aplicarDesconto(livrosOrdenados))
}
