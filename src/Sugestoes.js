function LayoutSugestoes (props) {
    return (
        <li>
            <div className="sugestao">
                <div className="usuario">
                    <img src = {props.image} alt = "Foto do usuário"/>
                    <div className="texto">
                        <div className="nome">{props.name}</div>
                        <div className="razao">{props.reason}</div>
                    </div>
                </div>

                <div className="seguir">Seguir</div>
            </div>
        </li>
    )
}

export default function Sugestoes () {
    const sugestions = [
        {img: "assets/img/bad.vibes.memes.svg", user: "bad.vibes.memes", reason: "Segue você"},
        {img: "assets/img/chibirdart.svg", user: "chibirdart", reason: "Segue você"},
        {img: "assets/img/razoesparaacreditar.svg", user: "razoesparaacreditar", reason: "Novo no Instagram"},
        {img: "assets/img/adorable_animals.svg", user: "adorable_animals", reason: "Segue você"},
        {img: "assets/img/smallcutecats.svg", user: "smallcutecats", reason: "Segue você"}
        ]

    return (
		<ul className="sugestoes">            
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

			{sugestions.map(sugestion => <LayoutSugestoes image = {sugestion.img} name={sugestion.user} reason={sugestion.reason}/>)}
		</ul>
    )
}