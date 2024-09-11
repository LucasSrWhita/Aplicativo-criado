const start = () => {
    
    while(true){
        let opção = "Cadastrar"
        switch(opção) {
            case "cadastrar":
                console.log("Vamos cadastrar")
                break
            case "listar":
                console.log("Vamos listar")
                break
            case "Sair":
                return
        }
    }
} 

start()