function first(callback){
    console.log(`primeiro`);
    if (callback) callback();
}
function second(callback){
    console.log(`segundo`);
    if (callback) callback();
}
function third(callback){
    console.log(`terceiro`);
    if (callback) callback();
}
const ultimo = "ultimo a ser executado"
first(firstcallback);
function firstcallback(){
    second(secondcallback);
}
function secondcallback(){
    third(thirdcallback);
}
function thirdcallback(){
    console.log(ultimo);
}