import { rg, nomeFake, lastFake, emailFake } from "./fakers.js"

export  default function createUser(){ //toda vez que chamar essa função, tem que devolver um obj com as infos do us
    let firstName = nomeFake()
    let obj = { //variavel que guardará um objeto
        firstName,
        lastName: lastFake(),
        rg: rg(),
        email:emailFake(firstName)
    }
    return obj
}

