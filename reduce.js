const pessoas = [
    {nome: "Arthur", idade: 19 },
    {nome: "Maria", idade: 15 },
    {nome: "Larissa", idade: 30 },
    {nome: "Jorge", idade: 25 },
    {nome: "levy", idade: 78 },
    {nome: "Thales", idade: 50 }
];
const velha = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(velha)