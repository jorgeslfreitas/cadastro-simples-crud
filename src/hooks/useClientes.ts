import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import { useState, useEffect } from "react"
import UseTabelaOuForm from "./useTabelaOuForm"


export default function UseClientes() {

    const repo: ClienteRepositorio = new ColecaoCliente

    const { exibirForm, exibirTabela, tabelaVisivel } = UseTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    useEffect(obterTodos, [])
    
    function obterTodos() {
        repo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela
        })

    }

    function novoCliente() {
        setCliente(Cliente.vazio())
        exibirForm
    }
    
    function selecionarCliente(cliente: Cliente) {
        setCliente(cliente)
        exibirForm
    }

    async function excluirCliente(cliente: Cliente) {
        await repo.excluir(cliente)
        obterTodos()

    }

    async function salvarCliente(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()
    }

    return {
        cliente,
        clientes,
        obterTodos,
        novoCliente,
        selecionarCliente,
        excluirCliente,
        salvarCliente,
        exibirTabela,
        tabelaVisivel
    }

}