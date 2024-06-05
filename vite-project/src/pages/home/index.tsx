import { Link } from "react-router-dom" // npm i react-router-dom
import '../../pages/css/index.css'

export default function Home() {
    return (
        <>
            <h1>olá, você está no projeto de vite + react</h1>
            <p>
            Para esse projeto usamos a biblioteca react-router-dom que fornece componentes e utilitários para criar roteamento e navegação em uma aplicação.
            </p>
            <p>
            Também utilizamos um "Provider" que foi usado para disponibilizar dados ou funcionalidades compartilhadas para os componentes filhos.
            </p>
            <p>
            A função createBrowserRouter foi utilizada para construir as rotas da aplicação.
            </p>
            
            <div><Link to="/sobre">Sobre</Link></div>
            <div><Link to="/form">Formulario</Link></div>
            <div><Link to="/tarefas">Tarefas</Link></div>
        </>
    )
}
