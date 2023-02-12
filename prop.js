
function Produto(nome,estoque){
    this.nome = nome;
    Object.defineProperty(this, "estoque",{
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: true // configuravel
    });
}
const p1 = new Produto("levy", 3);
console.log(p1)
