const url = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
let livros = [];
consumirApiDeLivros();

async function consumirApiDeLivros(){
    const resposta = await fetch(url);
    livros = await resposta.json();
    const livrosComDesconto = aplicarDesconto(livros);
    exibirLivrosNaTela(livrosComDesconto);
}
