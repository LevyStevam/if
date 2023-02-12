const pessoa = new Object();
pessoa.nome = "Levy";
pessoa.idade = 20;
pessoa.getDatanasc = () =>{
    const atual = new Date();
    return atual.getFullYear() - pessoa.idade
}
console.log(pessoa.nome);
console.log(pessoa.getDatanasc());
function Pessoa(nome,sobrenome, idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
}
const p1 = new Pessoa("Levy", "Stevam", 20);
const p2 = new Pessoa("jon", "targino", 20);
console.log(p1)
console.log(p2)
