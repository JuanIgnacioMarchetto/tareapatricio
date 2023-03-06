const array1=[1,2,3,4];

const array2=[2,2,4,4];

function esPar(valor){
    return valor%2===0;
};

const sonPares1=array1.every( esPar);
const sonPares2=array2.every( esPar);

console.log(sonPares1);
console.log(sonPares2)