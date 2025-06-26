function comprar () {
    // Pega o elemento que contém o tipo de ingresso escolhido
    let tipo = document.getElementById('tipo-ingresso')

    // Pega o valor digitado no campo de quantidade e transforma em número inteiro
    let qtd = parseInt(document.getElementById('qtd').value)

    // Verifica se o tipo de ingresso selecionado é "pista"
    if (tipo.value === 'pista') {
        comprarPista(qtd) // Chama a função que cuida da compra de ingressos da pista
    }

    // Se for "inferior", chama a função comprarInferior
    else if (tipo.value === 'inferior') {
        comprarInferior(qtd)
    }

    // Senão, chama a função para "superior"
    else {
        comprarSuperior(qtd)
    }
}

function comprarPista(qtd) {
    // Pega a quantidade atual de ingressos disponíveis para a pista
    let pista = parseInt(document.getElementById('qtd-pista').textContent)

    // Se a quantidade desejada for maior que a disponível, mostra erro
    if (qtd > pista)
        alert("Quantidade indisponível para esse tipo de ingresso.");
    else {
        // Se tiver quantidade suficiente, subtrai do total
        pista = pista - qtd

        // Atualiza o valor na tela com a nova quantidade
        document.getElementById('qtd-pista').textContent = pista 

        // Mostra alerta de sucesso
        alert(`Compra realizada com sucesso!`);
    }
}

function comprarInferior(qtd) {
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent)
    if (qtd > inferior)
        alert("Quantidade indisponível para esse tipo de ingresso.");
    else {
        inferior = inferior - qtd
        document.getElementById('qtd-inferior').textContent = inferior 
        alert(`Compra realizada com sucesso!`);
    }
}

function comprarSuperior(qtd) {
    let superior = parseInt(document.getElementById('qtd-superior').textContent)
    if (qtd > superior)
        alert("Quantidade indisponível para esse tipo de ingresso.");
    else {
        superior = superior - qtd
        document.getElementById('qtd-superior').textContent = superior 
        alert(`Compra realizada com sucesso!`);
    }
}

/*
| Código             | Significado simples                                       |
| ------------------ | --------------------------------------------------------- |
| `function nome()`  | Cria uma função (um bloquinho de código que executa algo) |
| `getElementById()` | Pega um elemento HTML pelo seu ID                         |
| `value`            | Pega o valor de um input ou select                        |
| `textContent`      | Pega ou altera o **texto que está entre as tags** no HTML |
| `parseInt(valor)`  | Converte um texto em número inteiro                       |
| `alert("...")`     | Mostra uma caixinha de aviso para o usuário               |
| `===`              | Verifica se uma coisa é exatamente igual à outra          |
| `if (condição)`    | Verifica uma condição, se for verdadeira executa algo     |
| `else if / else`   | Alternativas caso a primeira `if` não seja verdadeira     | */
