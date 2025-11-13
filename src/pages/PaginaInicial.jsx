import Cabecalho from "../components/Cabecalho";
import Destaque from "../components/Destaque";
import Sobre from "../components/Sobre";
import Habilidades from "../components/Habilidades";
import Projetos from "../components/Projetos";
// import Contato from "../components/Contato";
// import Rodape from "../components/Rodape";

export default function PaginaInicial(){
    return(
        <>
            <Cabecalho/>
            <Destaque/>
            <Sobre/>
            <Habilidades/>
            <Projetos/>
            {/* 
            <Contato/>
            <Rodape/> */}
        </>
    )
}