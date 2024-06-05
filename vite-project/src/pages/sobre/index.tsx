import { Link } from "react-router-dom" // npm i react-router-dom
import '../../pages/css/index.css'

export default function Sobre() {
    return (
        <>
            <h1>Sobre</h1>
            <p>
                Projeto apresentado por Letícia Cardoso.
            </p>
            <p>
                Aplicação em sala de aula no curso de redes de computadores.
            </p>
            <p>
                Desenvolvido em Fatec Indaiatuba.
            </p>
            <div><Link to="/">Voltar para Home</Link></div>
            <div><Link to="/form">Formulario</Link></div>
            <div><Link to="/tarefas">Tarefas</Link></div>
        </>
    )
}
