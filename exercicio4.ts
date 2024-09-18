const usuarios: string[] = ["Maria", "Renata", "Lucas", "Joao"]

let encontrado: boolean = false

for (let usuario of usuarios) {
    if (usuario === "Joao"){
       encontrado = true
        break

    }
}

if (encontrado){
    console.log("Encontrado")
} else{
    console.log("Não Encontrado")
}