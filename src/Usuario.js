import React, {useState} from 'react'

export default function Usuario() {

    let [userName, setUserName] = useState("Alisson")
    let [userImg, setUserImg] = useState("assets/img/IMG_20220528_233012_262.jpg")

    function newUserName () {
        let newName = prompt("Digite o novo username")
        while(newName === '') {
            newName = prompt("Digite um username válido")
        }
        setUserName(userName = newName)
    }

    function newUserImg () {
        let newImg = prompt("Coloque o URL da nova foto de perfil")
        while(newImg === '') {
            newImg = prompt("Coloque um URL válido")
        }
        setUserImg (userImg = newImg)
    }

    return (
        <div className="usuario">
            <img onClick = {newUserImg} src= {userImg} alt="Foto do usuário"/>
            <div className="texto">
                <strong>esdras_aaf</strong>
                <span>
                    <p>{userName}</p>
                    <ion-icon name="pencil" onClick = {newUserName}></ion-icon>
                </span>
            </div>
        </div>
    )
}