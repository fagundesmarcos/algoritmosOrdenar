// Algoritmos //


/*
// Temos alguns livros disponiveis e gostariamos de saber qual o mais barato para poder adquirir. Como podemos fazer isso? Com os codigos abaixo... \o

const precosLivros = [25, 15, 30, 50, 45, 20];

let maisBarato = 0;

for (let atual = 0; atual < precosLivros.length; atual++){
    if( precosLivros[atual] < precosLivros[maisBarato]) {
        maisBarato = atual
    }
}

console.log(`o livro mais barato custa ${precosLivros[maisBarato]} reais`)

*/

//console.log(`testando sem o [] ----- o livro mais barato custa ${maisBarato}`) // mostra em qual indice esta, precisa usar igual o anterior




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// a partir daqui inportamos o novo anexo listaLivros. e mudamos um pouco nosso codigo.

/*

const livros = require('./listaLivros');

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++){
    if( livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual
    }
}

console.log(`o livro mais barato é o ${livros[maisBarato].titulo} que custa ${livros[maisBarato].preco} reais.`)




// o mais caro agora... vamos la.

let maisCaro = 0;

for (let atual = 0; atual < livros.length; atual++){
    if( livros[atual].preco > livros[maisCaro].preco){
        maisCaro = atual
    }
}

console.log(`o livro mais caro é o ${livros[maisCaro].titulo} que custa ${livros[maisCaro].preco} reais.`)

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*

const livros = require('./listaLivros');

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual++){
    if( livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual
    }
}

console.log(`o livro mais barato é o ${livros[maisBarato].titulo} que custa ${livros[maisBarato].preco} reais.`)

*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// A qui criamos o arquivo selectSort - para ordenar os livros.


/*

const livros = require('./listaLivros');

function menorValor (arrProdutos, posicaoInicial){ let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if( arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual
        }
    }
    return maisBarato;
}

module.exports = menorValor; // agora podemos usar essa função em outros arquivos, em outras partes do codigo.

*/

