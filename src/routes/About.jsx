import Navbar from "../components/Navbar/Navbar"
import Logo from "../components/Logo/Logo"
import LoginBtn from "../components/LoginBtn/LoginBtn"
import './About.css'
import { Header } from "../components/Header/Header"

export default () => {


    return (
        <>
            <Header/>

            <main className="main-content">
                <section>
                    <h2 className="section-title">
                        Como surgimos?
                    </h2>
                    <p className="section-text">
                        O #Educa&lt;/WEB&gt; nasceu a partir do desejo de um grupo de alunos de Análise e desenvolvimento de sistemas da PUC Minas, desejo de transformar vidas através do que mais amamos: educação e tecnologia.
                    </p>
                </section>
                <section>
                    <h2 className="section-title">
                        Quem somos nós?
                    </h2>
                    <p className="section-text">
                        Somos um grupo de alunos do curso de Análise e Desenvolvimento de Sistemas, da PUC Minas unidade São Gabriel. 
                    </p>
                </section>
                <section>
                    <h2 className="section-title">
                        Nossos objetivos
                    </h2>
                    <p className="section-text">
                        O #Educa&lt;/WEB&gt; tem como objetivo, principalmente, oferecer uma oportunidade que poucas pessoas realmente tem: mudar de vida através de uma educação de qualidade. Inicialmente desenvolvido com foco em pessoas em situação de vulnerabilidade social, este projeto agora abrange todos os tipos e níveis de pessoas, independente do seu conhecimento prévio sobre os cursos disponíveis na plataforma. 
                    </p>
                    <p className="section-text">
                        Eis aqui uma lista dos nossos objetivos:
                        <ul>
                            <li>Fornecer cursos gratuitos para pessoas que não tem recursos para comprar os melhores conteúdos da internet.</li>
                            <li>Tornar estas pessoas competitivas no mercado de trabalho.</li>
                            <li>Sermos relevantes na luta contra a desigualdade social.</li>
                        </ul>
                    </p>
                </section>
                <section>
                    <h2 className="section-title">
                        Nossas redes sociais:
                    </h2>
                    <p className="section-text">
                        <div className="container-social">
                            <a href="https://www.instagram.com/samuelmaia_" className="link-social" target="_blank">
                                Instagram
                            </a>
                            <a href="https://github.com/samuelmaia1" className="link-social" target="_blank">
                                Github
                            </a>
                        </div>
                    </p>
                </section>
            </main>
        </>
    )
}