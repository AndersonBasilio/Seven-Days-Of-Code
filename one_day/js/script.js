/*
(Você pode testar tudo isso indo no seu navegador, clicando com o botão direito, escolhendo a opção “Inspecionar” e a aba “Console”. Nessa aba, basta copiar e colar cada uma das linhas acima para confirmar que todas realmente retornam true).

Sendo assim, a sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
*/

let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

if (numeroUm == stringUm) {
    console.log('As variáveis numeroUm = ' + numeroUm + ' e stringUm = ' + stringUm + ' tem o mesmo valor, mas tipos diferentes.');
} else {
    console.log('As variáveis ' + numeroUm + ' e ' + stringUm + ' não tem o mesmo valor.')
}

if(numeroTrinta === stringTrinta){
    console.log('As variáveis numeroTrinta = ' + numeroTrinta + ' e a numeroTrinta = ' + stringTrinta + ' não tem o mesmo tipo.');

} else {
    console.log('As variáveis numeroTrinta = ' + stringTrinta + ' e numeroTrinta = ' + numeroTrinta + ' não tem o mesmo tipo.')
}

if (numeroDez == stringDez) {
    console.log('As variáveis numeroDez = ' + numeroDez + ' e stringDez = ' + stringDez + ' tem o mesmo valor, mas tipos diferentes.')

} else {
    console.log('As variáveis numeroDez = ' + numeroDez + 'e stringDez = ' + stringDez + ' não tem o mesmo valor.');
}