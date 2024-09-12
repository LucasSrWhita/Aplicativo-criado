const { select, input } = require('@inquirer/prompts')

let metas = [{value: "Ler a Biblía e estudar o CFW",
    checked: false, }]

const CadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta:"})

    if(meta.length == 0) {
    console.log("Digite alguma meta!")
    return
    }

    metas.push({value: meta, checked: false})
}

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
                name: "Listar Metas",
                value: "Listar"
            },
            {
                Name:"Sair",
                value:"Sair"
            }
      ]
     })
    
        switch(opcao) {
            case "Cadastrar":
            await CadastrarMeta()      
            console.log(metas)
                break
            case "Listar":
                console.log("Vamos Excluir")
                break
            case "Sair":
                console.log("Até mais, querido!")
                return
        }
    }
} 

start()