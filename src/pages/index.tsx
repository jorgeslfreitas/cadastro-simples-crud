import Tabela from "../components/Tabela";
import Layout from "../components/Layout";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import UseClientes from "../hooks/useClientes";

export default function Home() {

  const { 
    novoCliente,
    cliente,
    clientes,
    selecionarCliente,
    excluirCliente,
    salvarCliente,
    exibirTabela,
    tabelaVisivel,
  } = UseClientes()

  return (
    <div
        className={`
          flex justify-center items-center h-screen
          bg-gradient-to-r from-blue-500 to-blue-700
         text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4"
                onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente} />
          </>
        ) : (
          <Formulario 
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}
