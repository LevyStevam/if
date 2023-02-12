const num = [5,18,29,5,34,9,8,1,11,32,6,7,91];
const numdobro = num.map(valor => valor*2);
console.log(numdobro);
const pessoas = [
    {nome: "Arthur", idade: 19 },
    {nome: "Maria", idade: 15 },
    {nome: "Larissa", idade: 30 },
    {nome: "Jorge", idade: 25 },
    {nome: "levy", idade: 78 },
    {nome: "Thales", idade: 50 }
]
const nomes = pessoas.map(obj => obj.nome);
const idade = pessoas.map(obj => obj.idade);
console.log(idade)
console.log(nomes)