var almuerzo=[
    {principal:'arepa', postre:'helado'},
    {principal:'tacos', postre:'torta de queso'},
    {principal:'pizza', postre:'galletas'},
    {principal:'sushi', postre:'quesillo'},
    {principal:'arepa', postre:'golfeados'},    
    {principal:'arepa', postre:'churros'},
];
var cantidadArepas=0;

//for(var i=0; i <almuerzo.length;i++){
//   if(almuerzo[i].principal==='arepa'){
//       cantidadArepas++;
//   }
//}
//lo mismo que::::
var cantidadArepas= almuerzo.reduce(function(contador,almuerzo){
if(almuerzo.principal==='arepa'){
    return contador + 1;
}else{
    return contador;
}
},0)

console.log(cantidadArepas)