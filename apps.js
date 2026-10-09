// ARQUIVO: app.js
// ==========================================

// BLOCO 1 - RELACIONADO Á FUNDAMENTOS E VARIAVEIS
// ------------------------------------------

// 1. Uso do 'let' (permite reatribuicao)
let pontos = 50;
pontos = pontos + 10;
console.log("Pontos atuais:", pontos);

// 2. Uso do 'const' (nao permite reatribuicao)
const MAX_PONTOS = 100;
// MAX_PONTOS = 110; 
// Se a linha acima for descomentada, o JavaScript lancara um TypeError.
// Motivo: Variaveis declaradas com 'const' sao constantes; seu valor na memoria nao pode ser alterado.

// 3. Tipos Primitivos e o operador 'typeof'
const texto = "Davi";           // String
const numero = 24;              // Number
const aprovado = true;          // Boolean
let variavelIndefinida;         // Undefined (criada, mas sem valor)
const valorNulo = null;         // Null (ausencia intencional de valor)

console.log("Tipo de texto:", typeof texto);
console.log("Tipo de numero:", typeof numero);
console.log("Tipo de aprovado:", typeof aprovado);
console.log("Tipo de variavelIndefinida:", typeof variavelIndefinida);
// Atencao ao bug historico do JavaScript: typeof null retorna "object"
console.log("Tipo de valorNulo:", typeof valorNulo); 

// 4. Template Literals vs Concatenacao tradicional
const fraseTemplate = `Ola, meu nome e ${texto} e tenho ${numero} anos.`;
const fraseConcat = "Ola, meu nome e " + texto + " e tenho " + numero + " anos.";
console.log("Template Literal:", fraseTemplate);
console.log("Concatenacao:", fraseConcat);


// ------------------------------------------
// BLOCO 2 - FUNCOES E HOISTING
// ------------------------------------------

// 1. Hoisting em Funcao Declarada
// O JavaScript "ica" (eleva) a declaracao da funcao para o topo do escopo antes de executar o codigo.
console.log("Chamando antes da declaracao (Hoisting):", ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

// 2. ReferenceError em Funcao de Expressao
// console.log(ehMaiorDeIdadeExpressao(20)); 
// Se descomentada, a linha acima gera um ReferenceError. 
// Variaveis com 'const' ou 'let' (mesmo guardando funcoes) nao sofrem hoisting da mesma forma.

const ehMaiorDeIdadeExpressao = function(idade) {
    return idade >= 18;
};

// 3. As tres formas de declarar uma funcao
function dobroDeclarada(n) {
    return n * 2;
}

const dobroExpressao = function(n) {
    return n * 2;
};

// Arrow Function: Sintaxe mais moderna e enxuta (o 'return' e implicito se nao houver chaves)
const dobroArrow = n => n * 2;

// 4. Parametro com valor padrao
function dobroComPadrao(n = 1) {
    return n * 2;
}
console.log("Dobro sem passar parametro (assume n=1):", dobroComPadrao());


// ------------------------------------------
// BLOCO 3 - CONTROLE DE FLUXO
// ------------------------------------------

// 1. Estrutura if/else
function classificarNota(nota) {
    if (nota >= 6) {
        console.log("Status: Aprovado");
    } else {
        console.log("Status: Reprovado");
    }
}
classificarNota(7);

// 2. Estrutura Switch
const corSemaforo = "verde";
switch (corSemaforo) {
    case "vermelho":
        console.log("Pare");
        break;
    case "amarelo":
        console.log("Atencao");
        break;
    case "verde":
        console.log("Siga");
        break;
    default:
        console.log("Cor invalida");
}

// 3. Laco FOR - Tabuada do 5
console.log("--- Tabuada do 5 ---");
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// 4. Laco WHILE - Contagem regressiva
console.log("--- Contagem Regressiva ---");
let contador = 5;
while (contador >= 1) {
    console.log(contador);
    contador--; // Fundamental: condicao de parada para evitar loop infinito
}

// 5. Par ou Impar de 1 a 20 (Utilizando FOR e WHILE)
console.log("--- Par ou Impar (FOR) ---");
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} e par`);
    } else {
        console.log(`${i} e impar`);
    }
}

console.log("--- Par ou Impar (WHILE) ---");
let num = 1;
while (num <= 20) {
    if (num % 2 === 0) {
        console.log(`${num} e par`);
    } else {
        console.log(`${num} e impar`);
    }
    num++;
}

// 6. Switch para dias da semana
function diaDaSemana(numero) {
    switch (numero) {
        case 1: return "Domingo";
        case 2: return "Segunda-feira";
        case 3: return "Terca-feira";
        case 4: return "Quarta-feira";
        case 5: return "Quinta-feira";
        case 6: return "Sexta-feira";
        case 7: return "Sabado";
        default: return "Numero invalido";
    }
}
console.log("Dia 4 corresponde a:", diaDaSemana(4));
console.log("Dia 9 corresponde a:", diaDaSemana(9));
