// Importações
import { salvar, pesquisar, limpar } from "./controlerNutribot.js";

// Botão Cadastrar
let btCadastrar = document.getElementById("btCadastrar")
btCadastrar.addEventListener("click", () => {
    salvar()
})

// Botão Pesquisar
let btPesquisar = document.getElementById("btPesquisar")
btPesquisar.addEventListener("click", () => {
    let nome = document.getElementById("nome").value  
    let pessoa = pesquisar(nome)
    if (pessoa != null){
        alert("Essa pessoa já está devidamente cadastrada")
        limpar()
    } else { 
        alert("Pessoa não encontrada")
        limpar()
    }
});
