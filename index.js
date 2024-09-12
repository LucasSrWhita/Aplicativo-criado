const { select } = require('@inquirer/prompts')

const start = async () => {
    
    while(true){
        
     const opcao = await select ({
        message: "Menu >",
        choices: [
            {
               name: "Cadastrar Meta",
               value: "Cadastrar"
            },
            {
                name: "Excluir Meta",
                value: "Excluir"
            },
            {
                Name:"Sair",
                value:"Sair"
            }
      ]
     })
    
        switch(opcao) {
            case "Cadastrar":
                console.log("Vamos cadastrar")
                break
            case "Excluir":
                console.log("Vamos Excluir")
                break
            case "Sair":
                console.log("Até mais, querido!")
                return
        }
    }
} 

start()