class Dispositivo{
    constructor(nome){
        this.nome= nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado) return console.log(`${this.nome} já está ligado`);  
        this.ligado = true;
    }
    desligar(){
        if(!this.ligado) return console.log(`${this.nome} já está desligado`);
        this.ligado = false;
    }
}
const iphone = new Dispositivo("iphone");
iphone.ligar();
iphone.ligar();
iphone.desligar();
iphone.desligar();
class Celular extends Dispositivo{
    constructor(nome,cor){
        super(nome);
        this.cor = cor;
    }
}
const c1 = new Celular("S20", "azul");
console.log(c1.nome, c1.cor);