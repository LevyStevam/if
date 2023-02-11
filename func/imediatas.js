// IIFE = Immediately invoked function expression
// Nenhuma váriavel ou constante que eu criar dentro da função afeta o escopo global
(function(n1, n2){
    function nome(name, surname){
        console.log(`olá ${name} ${surname}`);
    }
    const jon = "Jonathan";
    nome(jon,"targino");
})();
//criando uma constante com mesmo nome da função imediata percebemos que nao afeta em nada
// pois a função imediata n toca o escopo global
const jon = "Levy";
