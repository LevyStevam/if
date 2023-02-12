class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome
    }
    falar (){
        console.log(`${this.nome} está dizendo oi`);
    }
}
const p1 = new Pessoa("Levy", "Stevam");
p1.falar();