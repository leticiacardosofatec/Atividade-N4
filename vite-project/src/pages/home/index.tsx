import { Link } from "react-router-dom" // npm i react-router-dom
import '../../pages/css/index.css'

export default function Home() {
    return (
        <>
            <h1>Reorganização das Pastas</h1>
            <p>
            Reorganizamos o projeto para garantir que fique mais fácil realizar a manutenção das páginas e dos componentes do projeto.
            </p>
            <h1>Renovação da Página Inicial</h1>
            <p>
            Levamos toda a estrutura da página inicial para dentro de um arquivo que irá passar a ser o componente responsável por essa página.
            </p>
            <h1>Construção da Segunda Página</h1>
            <p>
            A página Sobre vai trazer informações sobre o nosso projeto e seu código deve ficar dentro do arquivo.
            </p>
            
            <div><Link to="/sobre">Sobre</Link></div>
            <div><Link to="/form">Formulario</Link></div>
        </>
    )
}