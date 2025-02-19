import email from "./email.js"
import lastname from "./lastname.js"
import nomes from "./nomes.js"

function rg(){
    return Math.random().toString().slice(3,12)
}

//console.log(nomes)

function nomeFake(){
    let idx = parseInt(Math.random()*nomes.length)
    return nomes[idx]
}

function lastFake(){
    let idx = parseInt(Math.random()*lastname.length)
    return lastname[idx]
}

function emailFake(nomes){
    let idx = parseInt(Math.random()*email.length)
    let dominio = email[idx]
    return nomes.toLowerCase()+"@"+dominio
}

export {rg, nomeFake , lastFake, emailFake}