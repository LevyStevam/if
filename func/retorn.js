function mult(multiplicador){
    return function(n){
        return n * multiplicador;
    }
}
const dup = mult(2);
const tri = mult(3);
const quad = mult(4);

console.log(dup(2));
console.log(tri(3));
console.log(quad(4));