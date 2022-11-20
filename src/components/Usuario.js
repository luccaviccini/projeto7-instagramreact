import React from 'react'
export default function Usuario(props){

    const [username, setUsername] = React.useState(props.username)
    function getUserName() {
      const userName = prompt("Digite seu nome de usuário");
      setUsername(!userName.length? props.username : userName);
    }


    const [profileImage , setProfileImage] = React.useState(props.imagem)
    function getImage(){
      const imagePerfil = prompt("Coloque o link da nova imagem")
      setProfileImage(!imagePerfil.length? props.imagem : imagePerfil);
    } 

    return (
      <div data-test="user" className="usuario">
        <img
          data-test="profile-image"
          src={profileImage}
          onClick={getImage}
          alt=""
        />
        <div className="texto">
          <strong>{props.username}</strong>
          <span data-test="name">
            {username}
            <ion-icon
              data-test="edit-name"
              onClick={getUserName}
              name="pencil"></ion-icon>
          </span>
        </div>
      </div>
    );
}

