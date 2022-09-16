import React, {useState} from 'react'

function LayoutPosts (props) {
    let [saveIcon, setSaveIcon] = useState("bookmark-outline")
    let [likeIcon, setLikeIcon] = useState("heart-outline")
    let [classLike, setClassLike] = useState("")
    let [likeNumber, setLikeNumber] = useState(Number((props.likes).replace(".", "")))

    function blackSaveIcon () {
        if(saveIcon === "bookmark-outline"){
            setSaveIcon(saveIcon = "bookmark")
        }  else {
            setSaveIcon(saveIcon = "bookmark-outline")
        }
    }

    function redLikeIcon () {
        if(likeIcon === "heart-outline"){
            setLikeIcon(likeIcon = "heart")
            setClassLike(classLike = "red")
            setLikeNumber(likeNumber + 1)
        }  else {
            setLikeIcon(likeIcon = "heart-outline")
            setClassLike(classLike = "black")
            setLikeNumber(likeNumber - 1)
        }
    }

    function redLikeIconPost () {
        if(likeIcon === "heart-outline"){
            setLikeIcon(likeIcon = "heart")
            setClassLike(classLike = "red")
            setLikeNumber(likeNumber + 1)
        }
    }

    return (
            <li>
                <div className="post">
                    <div className="topo">
                        <div className="usuario">
                            <img src={props.user_img}  alt="Foto do Usuário"/>
                            {props.user}
                        </div>
                        <div className="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div className="conteudo">
                        <img src={props.content} onDoubleClick = {redLikeIconPost} alt="Conteúdo do Post"/>
                    </div>

                    <div className="fundo">
                        <div className="acoes">
                            <div className="flex">
                                <div className={classLike}>
                                    <ion-icon name={likeIcon} onClick = {redLikeIcon}></ion-icon>
                                </div>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name={saveIcon} onClick={blackSaveIcon}></ion-icon>
                            </div>
                        </div>

                         <div className="curtidas">
                            <img src={props.user_liked_img} alt="Foto do usuário que curtiu o post"/>
                            <div className="texto">
                                Curtido por <strong>{props.user_liked}</strong> e <strong>outras {likeNumber} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>  
            </li>
    )
}

export default function Posts(){

    const posts = [
        {user_img: "assets/img/meowed.svg", user: "meowed", content: "assets/img/gato-telefone.svg", user_liked: "respondeai", user_liked_img: "assets/img/respondeai.svg", likes: "101.523"},
        {user_img: "assets/img/barked.svg", user: "barked", content: "assets/img/dog.svg", user_liked: "adorable_animals", user_liked_img: "assets/img/adorable_animals.svg", likes: "99.159"}
        ];

    return (
		<ul className="posts">
			{posts.map(post => <LayoutPosts 
                user_img = {post.user_img} 
                user = {post.user} 
                content = {post.content} 
                user_liked = {post.user_liked}
                user_liked_img = {post.user_liked_img} 
                likes = {post.likes}/>
            )}
		</ul>
    )
}