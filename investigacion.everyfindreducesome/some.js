const array=[1,2,3,-10,5,6];

//const valorMenorCero=array.some(function(valor){
//    return valor<0
//});
//lo mismo q 
//const valorMenorCero=array.some(valor=>valor<0);
//o
const isLessThanZero= valor=>valor<0;
const valorMenorCero=array.some(isLessThanZero);

console.log(valorMenorCero);

var users=[
    {name:'fabian', age:23},
    {name:'norma', age:10},
    {name:'steve', age:13},
    {name:'john', age:11},
];
const anyuAdult=users.some(users=>users.age>18);

console.log(anyuAdult)
    


