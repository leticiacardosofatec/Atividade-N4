import { Link } from "react-router-dom" // npm i react-router-dom
import '../../pages/css/index.css'

export default function Tarefas() {
    return (
        <>
            <h1>Tarefas Feitas nesse Projeto</h1>
            <ul>
                <li>1-Reorganizar o projeto para garantir que fique mais fácil realizar a manutenção das páginas e dos componentes do projeto.</li>
                <li>2-Levar toda a estrutura da página inicial para dentro de um arquivo que irá passar a ser o componente responsável por essa página.</li>  
                <li>3-A página Home vai faze ruma breve apresentação do nosso projeto.</li>
                <li>4-A página Sobre vai trazer informações sobre o nosso projeto e seu código deve ficar dentro do arquivo.</li>
                <li>5-A página Form deverá ter os campos nome, e-mail, telefone e um botão de enviar.</li>
                <li>6-A página Tarefas vai listar uma série de tarefas sobre o projeto.</li>
             </ul>
            <div><Link to="/">Voltar para Home</Link></div>
            <div><Link to="/form">Formulario</Link></div>
            <div><Link to="/sobre">Sobre</Link></div>
        </>
    )
}
