import { Link } from "react-router-dom" // npm i react-router-dom
import '../../pages/css/index.css'

export default function Tarefas() {
    return (
        <>
            <h1>Tarefas Feitas nesse Projeto</h1>
            <ul>
                <li>Reorganizar o projeto para garantir que fique mais fácil realizar a manutenção das páginas e dos componentes do projeto.</li>
                <li>Levar toda a estrutura da página inicial para dentro de um arquivo que irá passar a ser o componente responsável por essa página.</li>  
                <li>A página Sobre vai trazer informações sobre o nosso projeto e seu código deve ficar dentro do arquivo.</li>
             </ul>
            <div><Link to="/">Voltar para Home</Link></div>
            <div><Link to="/form">Formulario</Link></div>
            <div><Link to="/sobre">Sobre</Link></div>
        </>
    )
}