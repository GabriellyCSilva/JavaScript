//Modularização/import-export
//Podemos exportar variaveis, funções, valores e objetos - export function draw()
//Para não ficar exportando um por um, podemos ao final do arquivo colocar- export{}
import createUser from "./user.js"; //como só temos um export, podemos deixar a chave vazia
console.log("oi gente");
let user = createUser()
console.log(user);