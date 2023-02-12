const nums = [5,6,7,12,25,3,78,91,1,7,15,10,11];
const filnum = nums.filter(valor => valor > 10)
console.log(filnum)
const pessoas = [
    {nome: "Arthur", idade: 19 },
    {nome: "Maria", idade: 15 },
    {nome: "Larissa", idade: 30 },
    {nome: "Jorge", idade: 25 },
    {nome: "levy", idade: 78 },
    {nome: "Thales", idade: 50 }
]
const nomesGrandes = pessoas.filter(valor =>valor.nome.length > 5);
const idade50 = pessoas.filter(valor => valor.idade >= 50)
const terminaComA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith("a"));
console.log(nomesGrandes);
console.log(idade50);
console.log(terminaComA);