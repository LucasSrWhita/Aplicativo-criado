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

    metas.forEach((M) => {
        M.checked = false 

    if(repostas.length == 0) {
        console.log("Selecione alguma coisa, meu dog!")
        return
    }

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
  
if(realizadas.length == 0) {
    console.log('Não fizesse nada ainda, caba safado!')
    return
      }

    await select({
    message: "Metas realizadas!",
    choices: [...realizadas]
      })

}

const MetasAbertas = async () => {
    const abertas = metas.filter((meta) => {
        return meta.checked != true
    })

if(abertas.length == 0) {
    console.log ('Não possue nenhuma meta aberta, parabéns!')
    return
}

await select ({
    message: "Metas Abertas" + realizadas.length,
    choices: [...abertas]
  })

}

async function start() {

    while (true) {

        const opcao = await select({
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
                    name: "Metas Abertas",
                    value: "Abertas"
                },
                {
                    Name: "Sair",
                    value: "Sair"
                }
            ]
        })

        switch (opcao) {
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
            case "Abertas":
                await MetasAbertas()
                break
            case "Sair":
                console.log("Até mais, querido!")
                return
        }
    }
} 

start()