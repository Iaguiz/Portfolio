const projetos = [
    {
        titulo: "Projeto 1",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero ut blanditiis omnis autem sequi reprehenderit nostrum corrupti! Dolores adipisci aliquam atque quis quas impedit earum tempore obcaecati beatae vel.",
        imagem: "/projects/p1.png",
        site: "#",
        codigo: "https://github.com/Iaguiz/#"
    },
    {
        titulo: "Projeto 2",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero ut blanditiis omnis autem sequi reprehenderit nostrum corrupti! Dolores adipisci aliquam atque quis quas impedit earum tempore obcaecati beatae vel.",
        imagem: "/projects/p2.png",
        site: "#",
        codigo: "https://github.com/Iaguiz/#"
    },
    {
        titulo: "Projeto 3",
        descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas libero ut blanditiis omnis autem sequi reprehenderit nostrum corrupti! Dolores adipisci aliquam atque quis quas impedit earum tempore obcaecati beatae vel.",
        imagem: "/projects/p3.png",
        site: "#",
        codigo: "https://github.com/Iaguiz/#"
    }
];

export default function Projetos(){
    return(
        <section id="projetos" className="projetos">
            <div className="container">
                <header className="projetos_cabeca">
                    <span className="eyebrow">Portfólio</span>
                    <h2 className="projetos_titulo">Projetos</h2>
                </header>
                <div className="projetos_grid">
                    {projetos.map((p) => (
                        <article className="projeto" key={p.titulo}>
                            <div className="projeto_tumb">
                                <img src={p.imagem} alt={`Imagem do projeto ${p.titulo}`}/>
                            </div>
                            <div className="projeto_corpo">
                                <h3 className="projeto_titulo">{p.titulo}</h3>
                                <p className="projeto_descricao">{p.descricao}</p>
                                <div className="projeto_acoes">
                                    <a className="botao botao-primario" href={p.site} target="_blank" rel="noopener noreferrer" aria-label={`Abrir site do projeto ${p.titulo}`}>
                                        Ver site
                                    </a>
                                    <a className="botao" href={p.codigo} target="_blank" rel="noopener noreferrer" aria-label={`Abrir código do projeto ${p.titulo}`}>
                                        GitHub
                                    </a>
                                </div>
                            </div>

                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}