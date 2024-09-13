const { select, input, checkbox } = require('@inquirer/prompts')

let meta = {
    value: "Ler a Biblía e estudar o CFW",
    checked: false,
} 

let metas = [ meta ]

const CadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta:"})

    if(meta.length == 0) {
    console.log("Digite alguma meta!")
    return
    }

    metas.push({value: meta, checked: false})
}

const ListarMetas = async () => {
    const repostas = await checkbox({
        message:("Use as setas para mudar a opção, o espaço para marcar ou desmarcar as metas, e o enter para finaizar"),
        choices: [...metas],
        instructions: false
    })

    if(repostas.length == 0) {
        console.log("Selecione alguma coisa, meu dog!")
        return
    }

    metas.forEach((M) => {
        M.checked = false 
    })

    repostas.forEach((resposta) => {
        const meta = metas.find((M) => {
            return M.value == resposta
        })

        meta.checked = true  

    });

       console.log("Meta(s) concluída(s)!")
    
    }

const MetasRealizadas = async () => {
  const realizadas = metas.filter((meta) => {
    return meta.checked
  })
  
if(realizadas.lenght ==0) {
    console.log('Não fizesse nada ainda, caba safado!')
    return
}

    await select({
    message: "Metas realizadas!",
    choices: [...realizadas]
})

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
                name: "Metas Realizadas",
                value: "Realizadas"
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
                await ListarMetas()
                console.log("Muito bem!")
                break
            case "Realizadas": 
                await MetasRealizadas()
                break
            case "Sair":
                console.log("Até mais, querido!")
                return
        }
    }
} 

start()