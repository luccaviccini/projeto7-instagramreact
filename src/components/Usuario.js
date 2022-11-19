import React from 'react'
export default function Usuario(props){

    const [username, setUsername] = React.useState(props.username)
    function getUserName() {
      const userName = prompt("Digite seu nome de usuário");
      setUsername(userName);
    }


    const [profileImage , setProfileImage] = React.useState(props.imagem)
    function getImage(){
      const imagePerfil = prompt("Coloque o link da nova imagem")
      setProfileImage(imagePerfil)
    } 

    return (
      <div data-test="user" className="usuario">
        <img data-test="profile-image" src={profileImage} onClick={getImage} alt="" />
        <div className="texto">
          <strong data-test="name">{props.username}</strong>
          <span>
            {username}
            <ion-icon data-test="edit-name" onClick={getUserName} name="pencil"></ion-icon>
          </span>
        </div>
      </div>
    );
}

