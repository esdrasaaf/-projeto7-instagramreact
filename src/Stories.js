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
            {stories.map(storie => <li>
                <div className="story">
                    <div className="imagem">
                        <img src={storie.img} alt = "Foto do usuário"/>
                    </div>
                    <div className="usuario">
                        {storie.user}
                    </div>
                </div>
            </li>)}           
            
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div> 
        </ul>
    )
}