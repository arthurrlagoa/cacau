// variaveis principais do jogo
let respotaCorreta;
let pontuacao=0;
let modoAtual='basico';

// funçao que inicia o jogo com o modo escolhido
function iniciarjogo(modo) {
    modoAtual=modo;
    document.getElementById("area-jogo").style.display="block";
    novaPergunta();
}

// função que gera pergunta e mostra na tela
function novaPergunta() {
    const numeros= gerarNumeros(modoAtual);
    const operação= escolherOperação();
    const perguntaTexto = '${numerosnum1} ${operacao} ${numeros.num2}';

    respostaCorreta = calcularResposta(numeros.num1, numeros.num2, operacao);

    document.getElementById("pergunta").innnerText = perguntaTexto;
    document.getElementById("resposta").value = "";
    document.getElementById("resultado").innnerText = "";
}

// Gera números aleátorios, maiores no modo desafio
function escolherOperação() { 
    let num1 = math.floor(math.radom() * 10) + 1; 
    let num2 = math.floor(math.radom() * 10) +1;


    if (modo === 'desafio') {
        num1 *= 2;
        num2 *= 3;
    }


     return { num1, num2 };
}

        escolha aletoriamente uma operação: +, - ou *
        function escolherOperação() {
const operacoes = ['+', '-', '*'];
 retur operacoes[Math.floor(math.radom() * operacoes.length)];
        }


     //  calcula o resultado com base nos numeros e operaçao
     function calcularResposta(n1, n2, op) {
        switch (op) {
            case '+': return n1 + n2;
            case '-': return n1 - n2;
            case '*': return n1 * n2;
        }
     }


     // verifica se a resposta do usuário está correta
      
     function verificarResposta() {
        const respostaUsuario = parseInt(document.getElementById('resposta').value);

        if (respostaUsuario === respostaCorreta) {
            document.getElementById("resultado").innerText = " Resposta correta!";
            pontuacao+= 10;
        } else{
            document.getElementById("resultado").innerText =  ' Errado! A resposta era ${respostacorreta}';
            pontuaaçao-=5;
        }
         documet.getElementById("pontaçao").innnerText = pontaçao;
     }
     





