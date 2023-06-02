function validaDisponibilidade(livro){
    if (livro.quantidade > 0){
        return "livro__imagens"
    } else {
        return "livro__imagens indisponivel"
    }
}