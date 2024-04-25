//Recebendo informação do usuário.
var nome = prompt('Qual é seu nome? ');

//Verificando se o campo foi preenchido.
if(nome  == ''){
    while(nome  === '' ){
        alert('Informe seu nome, por favor!');
        var nome = prompt('Qual é seu nome? ');
    }
}

//Recebendo informação do usuário..
var idade = prompt('Qual é sua idade? ');

//Verificando se o campo foi preenchido.
if(idade == ''){
    while(idade === ''){
        alert('Informe sua idade por favor!');
        var idade = prompt('Qual é sua idade? ');
    }
}

//Recebendo informação do usuário.
var linguagemProgramacao = prompt('Qual é a liguagem de programação que está estudando? ');

//Verificando se o campo foi preenchido.
if(linguagemProgramacao == ''){
    while(linguagemProgramacao === '') {
        alert('Informe a Linguagem de Programação, por favor!');
        var linguagemProgramacao = prompt('Qual é a liguagem de programação que está estudando? ');
    }
}

//Imprimindo os Dados do usuário na tela com alert.
alert('Olá ' + nome + ', tudo bem? ' + ' Você tem ' + idade + ' anos e já esta aprendendo ' + linguagemProgramacao + '!');

var respostaUsuario = prompt('Você gosta de estudar ' + linguagemProgramacao + '? Digite 1 - [Sim] e 2 - [Não]');

while(respostaUsuario >= 3) {
    alert('Essa Opção não existe.')
    var respostaUsuario = prompt('Você gosta de estudar ' + linguagemProgramacao + '? Digite 1 - [Sim] e 2 - [Não]');
}

if(respostaUsuario == '1') {
    alert('Isso ai! Continue estudando, que você vai longe!');
}
if(respostaUsuario == '2') {
    alert('Que pena! Procure outra linguagem de programação de seu interesse.');
}



