function Calculadora(){
    this.display = document.querySelector(".display");
    this.inicia = () =>{
        document.addEventListener("click", event =>{
            const el = event.target;
            if(el.classList.contains("btn-num")) this.addNumDisplay(el);
            if(el.classList.contains("btn-clear")) this.clear();
            if(el.classList.contains("btn-del")) this.del();
            if(el.classList.contains("btn-eq")) this.realizaConta();
        });
        this.clear = () => this.display.value = "";
        this.addNumDisplay = (el) => this.display.value += el.innerText;
        this.del = () => this.display.value = this.display.value.slice(0,-1);
        this.realizaConta = () =>{
            try{
                let conta = this.display.value;
                conta = eval(conta);
                this.display.value = String(conta);
            }catch(e){
                alert("conta ivalida");
                return;
            }
        }

    };
}
const calculadora = new Calculadora();
calculadora.inicia();