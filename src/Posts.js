export default function Posts(){

    const posts = [
        {user_img: "assets/img/meowed.svg", user: "meowed", content: "assets/img/gato-telefone.svg", user_liked: "respondeai", user_liked_img: "assets/img/respondeai.svg", likes: "outras 101.523 pessoas"},
        {user_img: "assets/img/barked.svg", user: "barked", content: "assets/img/dog.svg", user_liked: "adorable_animals", user_liked_img: "assets/img/adorable_animals.svg", likes: "outras 99.159 pessoas"}
        ];

    return (
		<ul className="posts">
			{posts.map(post => <li>
                <div className="post">
                    <div className="topo">
                        <div className="usuario">
                            <img src={post.user_img}  alt="Foto do Usuário"/>
                            {post.user}
                        </div>
                        <div className="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div className="conteudo">
                        <img src={post.content} alt="Conteúdo do Post"/>
                    </div>

                    <div className="fundo">
                        <div className="acoes">
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                                <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                         <div className="curtidas">
                            <img src={post.user_liked_img} alt="Foto do usuário que curtiu o post"/>
                            <div className="texto">
                                Curtido por <strong>{post.user_liked}</strong> e <strong>{post.likes}</strong>
                            </div>
                        </div>
                    </div>
                </div>  
            </li>)}
		</ul>
    )
}