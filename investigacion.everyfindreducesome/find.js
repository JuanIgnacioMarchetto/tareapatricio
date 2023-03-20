const persons = [
  {
    name: "florin",
    age: 25,
  },
  {
    name: "ivan",
    age: 20,
  },
  {
    name: "liam",
     age: 18 
     ,}
];

//const res = name.find(findIvan);

/*function findIvan(item) {
  return item === "ivan";
}*/

const res = persons.find(findFlorin);

function findFlorin (person ){
    return person.name==='florin';
}

console.log(res);
