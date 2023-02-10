//hoisting(uma função pode ser chamada antes de ser criada)

nome();


function nome(){
    console.log(`oi levy`);
}

//arrow function
const arrow = () =>{
    console.log(`função arrow`);

}
arrow();

// function dentro de obj
const funções = {
    numeros(){
        console.log(1,2,3,4,5);
    }
}
funções.numeros();