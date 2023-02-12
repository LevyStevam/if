function* geradora(){
    yield () => {
        console.log("yield 1");
    };
    yield () => {
        console.log("yield 2");
    }
}
const g1 = geradora();
const f1 = g1.next().value;
const f2 = g1.next().value;
f1();
f2();