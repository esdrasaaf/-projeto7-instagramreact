import React, {useState} from 'react'

export default function Usuario() {

    let [userName, setUserName] = useState("Catana")
    let [userImg, setUserImg] = useState("assets/img/catanacomics.svg")

    function newUserName () {
        let newName = prompt("Digite o novo username")
        setUserName(userName = newName)
    }

    function newUserImg () {
        let newImg = prompt("Coloque o URL da nova foto de perfil")
        setUserImg (userImg = newImg)
    }

    return (
        <div className="usuario">
            <img onClick = {newUserImg} src= {userImg} alt="Foto do usuário"/>
            <div className="texto">
                <strong>catanacomics</strong>
                <span>
                    <p>{userName}</p>
                    <ion-icon name="pencil" onClick = {newUserName}></ion-icon>
                </span>
            </div>
        </div>
    )
}