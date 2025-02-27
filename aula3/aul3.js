//precisa instalar o node.js e abrir o terminal para ver se está intalado.
//para sair do terminal, cltr + c
//colocar no console npm init 
// dar enter até ele criar um arquivo json
//para chamar coloca npm run nome do que vc quer chamar
//projeto node precisa ter package 
//import encripit from "./crypto.js"
//console.log(encripit("oi gente"));

import readlineSync from "readline-sync"

let nome = readlineSync.question("Qual seu nome? ")
console.log("oi" + nome + "!")