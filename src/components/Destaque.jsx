export default function Destaque(){
    return(
        <section id="destaque">
            <div className="container destaque_conteudo">
                <div className="destaque_texto">
                    <p className="destaque_intro">Desenvolvedor Front-End</p>
                    <h1 className="destaque_titulo">Olá, meu nome é <span
                    className="destaque_nome">Iago Reis Homsi</span></h1>
                    <p className="destaque_descricao">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestias quisquam a officia excepturi vero odit, id quos adipisci earum cum atque quae blanditiis praesentium nostrum placeat sit aut autem!
                    </p>
                    <div className="destaque_botoes">
                        <a href="#projetos" className="botao botao-primario">Ver Projetos</a>
                        <a href="https://github.com/Iaguiz" className="botao" target="_blank">GitHub</a>
                    </div>
                </div>
                <div className="destaque_foto">
                    <img src="/profile.jpg" alt="Foto de perfil" />
                </div>
            </div>
        </section>
    );
}