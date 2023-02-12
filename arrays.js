// remover elementos do final do array
let nomes = ["Maria", "Joao", "Vitor"];
const remove = nomes.pop();
console.log(nomes, remove);
// adicionar no final do array
nomes.push("Larissa");
console.log(nomes);
// tirando elementos do array de uma ponta a outra
let novo = nomes.slice(1,-1);
console.log(novo);
// transformando string em array
let name = "Levy Stevam Queiroz"
const levy = name.split(" ");
console.log(levy)
//array em string
const dividido = ["levy", "stevam", "queiroz"];
let g = dividido.join(" ");
console.log(g)
//aulas 81 e 83