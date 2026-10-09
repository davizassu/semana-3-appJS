# Desafio de Introducao ao JavaScript

Este repositorio contem a resolucao dos desafios fundamentais de JavaScript, abordando os conceitos primordiais para a construcao de scripts na linguagem.

## O que eu aprendi neste projeto

### 1. Variaveis e Tipos Primitivos
*   **let vs const:** Aprendi a regra basica de sempre utilizar `const` por padrao para evitar alteracoes indesejadas de valores. O `let` e reservado apenas para variaveis que eu sei que precisarao ser reatribuidas (como contadores em lacos de repeticao).
*   **O bug do null:** Compreendi como verificar tipos com `typeof` e observei um comportamento legado do JS onde `typeof null` retorna `"object"`.
*   **Template Literals:** Substitui a concatenacao antiga (usando `+`) por strings crases (` `` `), o que deixa o codigo muito mais limpo e facil de ler ao injetar variaveis com `${variavel}`.

### 2. Funcoes e Hoisting
*   **Comportamento de Hoisting:** Percebi que funcoes declaradas (`function nome() {}`) sao lidas pelo JavaScript antes de o codigo ser executado. Isso permite chama-las no codigo antes mesmo da linha onde foram escritas.
*   **Expressoes e Arrow Functions:** Entendi que funcoes salvas em variaveis (seja de forma anonima ou como arrow functions `=>`) nao possuem esse "icamento". Elas precisam ser declaradas antes de serem chamadas. Arrow functions sao otimas para manter o codigo curto.
*   **Parametros Padrao:** Configurei valores padroes nos argumentos (`function dobro(n = 1)`), evitando que a funcao quebre e retorne `NaN` (Not a Number) caso seja chamada sem parametros.

### 3. Controle de Fluxo
*   **Tomada de Decisao:** Implementei regras de negocio condicionais usando `if/else` para cenarios binarios, e o `switch` para cenarios de multiplas escolhas especificas (como semaforo e dias da semana).
*   **Lacos de Repeticao:** Escrevi rotinas repetitivas utilizando o laco `for` (quando sabemos exatamente o tamanho do ciclo, como de 1 a 20) e o laco `while` (focado em rodar enquanto uma condicao for verdadeira).
*   **Prevencao de Loop Infinito:** Adquiri atencao redobrada com a condicao de parada do `while` (`contador--` ou `num++`) para impedir que o navegador ou o Node.js travem por execucao infinita.

## Como executar

Voce pode rodar este script de duas formas:
1.  **No Node.js:** Abra o terminal na pasta do arquivo e digite `node app.js`.
2.  **No Navegador:** Copie todo o codigo do arquivo `app.js` e cole na aba "Console" do Developer Tools do seu navegador (F12).
