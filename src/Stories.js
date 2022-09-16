function LayoutStorie (props) {
    return (
        <li>
            <div className="story">
                <div className="imagem">
                     <img src={props.image} alt = "Foto do usuário"/>
                </div>
                <div className="usuario">
                    {props.name}
                </div>
            </div>
        </li>
    )
}

export default function Stories () {
    const stories = [
        {user: "9gag", img: "assets/img/9gag.svg"}, 
        {user: "meowed", img: "assets/img/meowed.svg"}, 
        {user: "barked", img: "assets/img/barked.svg"},
        {user: "nathanwpylestrangeplanet", img: "assets/img/nathanwpylestrangeplanet.svg"},
        {user: "wawawicomics", img: "assets/img/wawawicomics.svg"},
        {user: "respondeai", img: "assets/img/respondeai.svg"},
        {user: "filomoderna", img: "assets/img/filomoderna.svg"},
        {user: "memeriagourmet", img: "assets/img/memeriagourmet.svg"}
        ]
    
    return (
        <ul className="stories">
            {stories.map(storie => <LayoutStorie name = {storie.user} image = {storie.img}/>)}           
            
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div> 
        </ul>
    )
}