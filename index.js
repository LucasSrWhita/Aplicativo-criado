const { select, input, checkbox } = require('@inquirer/prompts')

let Mensagem = "Bem-vindo ao app de Metas!";

let meta = {
    value: "Ler a Biblía e estudar o CFW",
    checked: false,
} 

let metas = [ meta ]

const CadastrarMeta = async () => {
    const meta = await input({message: "Digite a meta:"})

    if(meta.length == 0) {
    Mensagem = "Digite alguma meta!"
    return
    }

    metas.push({value: meta, checked: false}
    )

Mensagem = "Meta cadastrada com sucesso!"

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
        Mensagem = "Selecione alguma coisa, meu dog!"
        return
    }

    })

    repostas.forEach((resposta) => {
        const meta = metas.find((M) => {
            return M.value == resposta
        })

        meta.checked = true  

    });

       Mensagem = "Meta(s) concluída(s)!"
    
    }

const MetasRealizadas = async () => {
  const realizadas = metas.filter((meta) => {
    return meta.checked
  })
  
if(realizadas.length == 0) {
    Mensagem = 'Não fizesse nada ainda, caba safado!'
    return
      }

    await select({
    message: "Metas realizadas!" + realizadas.length,
    choices: [...realizadas]
      })

}

const MetasAbertas = async () => {
    const abertas = metas.filter((meta) => {
        return meta.checked != true
    })

if(abertas.length == 0) {
    Mensagem = 'Não possue nenhuma meta aberta, parabéns!'
    return
}

await select ({
    message: "Metas Abertas" + " " + abertas.length,
    choices: [...abertas]
  })

}

const DeletarMetas = async () => {
    const metasDesmarcadas = metas.map((meta) => {
         return {value: meta.value, checked: false,}
    })
    const ItensADeletar = await checkbox({
        message:("Selecione um item para deletar"),
        choices: [...metasDesmarcadas],
        instructions: false,
})

if(ItensADeletar.length == 0) {
    Mensagem = 'Nenhum item a deletar'
    return
}

ItensADeletar.forEach((item) => {
 metas = metas.filter((meta) => {
    return meta.value != item
 })
})

Mensagem = "Meta(s) deletada(s) com sucesso!"

}

const MostrarMensagem = () => {
    console.clear();

    if(Mensagem != "") {
        console.log(Mensagem)
        console.log("")
        Mensagem = ""
    }
}

async function start() {

    while (true) {
        MostrarMensagem()

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
                    name: "Deletar Metas",
                    value: "Deletar"
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
                case "Deletar":
                await DeletarMetas()
                break
            case "Sair":
                console.log("Até mais, querido!")
                return
        }
    }
} 

start()