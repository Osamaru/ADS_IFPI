// Importações
import { Aluno } from "./modelNutribot.js"
let cadastro = []
let pos = 0

// Pesquisar
export function pesquisar(nome) {
    for(let i = 0; i < cadastro.length; i++) {
        if (cadastro[i].nome == nome) {
            return cadastro[i]
        }
    }
    return null
}

// Cadastrar
function cadastrar(aluno) {
    cadastro[pos] = aluno
    pos++
}

// Limpa os campos
export function limpar() {
    document.getElementById("nome").value = ""
    document.getElementById("idade").value = ""
    document.getElementById("peso").value = ""
    document.getElementById("altura").value = ""
    document.getElementById("sexo").selectedIndex = "0"
    document.getElementById("nivelAtiv").selectedIndex = "0"
    document.getElementById("objetivo").selectedIndex = "0"
}

// Salva os dados e faz os cálculos para aparecer no Console
export function salvar() {
    // Atribuição de valores
    let valorPeso = document.getElementById("peso").value
    let valorAltura = document.getElementById("altura").value
    let valorIdade = document.getElementById("idade").value

    let sexoElement = document.getElementById("sexo")
    let valorSexo = sexoElement.options[sexoElement.selectedIndex].value

    let nivelAtivElement = document.getElementById("nivelAtiv")
    let valorNivelAtiv = nivelAtivElement.options[nivelAtivElement.selectedIndex].value

    let objetivoElement = document.getElementById("objetivo")
    let valorObjetivo = objetivoElement.options[objetivoElement.selectedIndex].value

    let tmb = 0
    let gastoTotal = 0 
    let escolhaObj = 0

    // Verificação de TMB de acordo com o Sexo
    if(valorSexo == "masculino") {
        // Calcula o tmb Masculino
        tmb = 66.5 + (13.75 * valorPeso) + (5.003 * valorAltura) - (6.775 * valorIdade)
    }
    else if(valorSexo == "feminino") {
        // Calcula o tmb Feminino
        tmb = 665.1 + (9.563 * valorPeso) + (1.850 * valorAltura) - (4.676 * valorIdade)
    }

    // Calcula o Gasto Total
    if(valorNivelAtiv == "sedentario") {
        gastoTotal = tmb * 1.2
    }
    else if(valorNivelAtiv == "leve") {
        gastoTotal = tmb * 1.375
    }
    else if(valorNivelAtiv == "moderado") {
        gastoTotal = tmb * 1.55
    }
    else if(valorNivelAtiv == "pesado") {
        gastoTotal = tmb * 1.725
    }
    else if(valorNivelAtiv == "muitoPesado") {
        gastoTotal = tmb * 1.9
    }

    // Calcula a quantidade de calorias que devem ser consumidas para atender ao objetivo
    if(valorObjetivo == "perder") {
        escolhaObj = gastoTotal - (0.2 * gastoTotal)
    }
    else if(valorObjetivo == "manter") {
        escolhaObj = gastoTotal
    }
    else if(valorObjetivo == "ganhar") {
        escolhaObj = gastoTotal + (0.2 * gastoTotal)
    }

// ======================================================================================

    // Cria um Novo Aluno
    let novoAluno = new Aluno()
    // Recebe o Nome
    novoAluno.nome = document.getElementById("nome").value
    // Recebe o Sexo
    novoAluno.sexo = valorSexo
    // Recebe a Idade
    novoAluno.idade = document.getElementById("idade").value
    // Recebe o Peso
    novoAluno.peso = document.getElementById("peso").value
    // Recebe a Altura
    novoAluno.altura = document.getElementById("altura").value
    // Recebe o Nível de Atividade
    novoAluno.nivelAtiv = valorNivelAtiv
    // Recebe o Objetivo
    novoAluno.objetivo = valorObjetivo
    // Recebe a Taxa Metabólica Basal
    novoAluno.tmb = tmb
    // Recebe o Gasto Total em calorias
    novoAluno.gastoTotal = gastoTotal
    // Recebe a Quantidade de Calorias para atingir o objetivo
    novoAluno.escolhaObj = escolhaObj

    // Cadastra um Novo Aluno no array "Cadastro"
    cadastrar(novoAluno)    
    console.log(novoAluno)

    // Mostra as informações na tela
    alert("Sua Taxa Metabólica Basal é de " + Math.round(tmb) + " calorias. \nSeu corpo, com base no seu nível de atividade, gasta no total " + Math.round(gastoTotal) + " calorias por dia.\nDessa forma, para atingir seu objetivo, você deve ingerir " + Math.round(escolhaObj) + " calorias diariamente.")

    // Limpa o formulário
    limpar()
}

