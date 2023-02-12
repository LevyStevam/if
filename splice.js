//               -6         -5        -4        -3        -2        -1 
//                0        1          2          3         4         5
const nomes = ["Kayke", "Larissa", "Patolina", "Careca", "Zezo", "Queixada"];
const removido = nomes.splice(3, 2, "Armando", "Junior");
console.log(nomes);
console.log(removido);
//aula 82
//const nomes = ["Kayke", "Larissa", "Patolina", "Careca", "Zezo", "Queixada"];
//const removido = nomes.splice(3, 2, "Armando", "Junior");
//console.log(nomes);
//console.log(removido);

//// concatenar arrays

const nums1 = [1,2,3];
const nums2 = [4,5,6];
const nums3 = [...nums1,...nums2];
console.log(`arrays concatenados: ${nums3}`);
