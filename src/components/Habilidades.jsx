const skills = [
    {nome: "React", nivel: 90},
    {nome: "JavaScript", nivel: 75},
    {nome: "TypeScript", nivel: 40},
    {nome: "Node.js", nivel: 60},
    {nome: "Java", nivel: 50},
    {nome: "C#", nivel: 40},
    {nome: "Python", nivel: 10},
    {nome: "Angular", nivel: 5},
    {nome: "MySQL", nivel: 70},
];
    
const tecnologias = [
    "React", "JavaScript", "TypeScript", "Node.js", "Angular", "Java", "C#", "Python", "SQL Server", "MySQL", "PostgreSQL",
    "Git", "GitHub", "HTML", "CSS", "MongoDB"
];

export default function Habilidades(){
    return(
        <section id="habilidades" className="habilidades">
            <div className="container">
                <header className="habilidades_cabeca">
                    <span className="eyebrow">O que eu sei fazer</span>
                    <h2 className="habilidades_titulo">Habilidades</h2>
                </header>
                <ul className="habilidades_barras" aria-label="Barras de proficiência">
                    {skills.map((s) => (
                        <li key={s.nome} className="habilidade">
                            <div className="habilidade_topo">
                                <span className="habilidade_nome">
                                    {s.nome}
                                </span>
                                <span className="habilidade_percentual" aria-hidden="true">
                                    {s.nivel}%
                                </span>
                            </div>
                            <div className="habilidade_bar" role="progressbar" aria-valuemin={0} aria-valuemax={100}
                             aria-valuenow={s.nivel} aria-label={`Proficiência em ${s.nome}:${s.nivel}%`}>
                                <div className="habilidade_fill" style={{width: `${s.nivel}%`}}/>

                            </div>
                        </li>
                    ))}
                </ul>
                <div className="habilidade_tecnologias">
                    {tecnologias.map((t) => (
                        <span key={t} className="tech">{t}</span>
                    ))}
                </div>
            </div>
        </section>
    );
}