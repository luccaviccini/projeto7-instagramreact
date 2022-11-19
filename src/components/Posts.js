import React from "react";

export default function Posts() {
  const posts = [
    {
      nome: "meowed",
      imagem: "assets/img/meowed.svg",
      curtidoPor: "respondeai",
      curtidas: 101523,
      conteudo: "assets/img/gato-telefone.svg",
    },
    {
      nome: "barked",
      imagem: "assets/img/barked.svg",
      curtidoPor: "adorable_animals",
      curtidas: 99159,
      conteudo: "assets/img/dog.svg",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key={post.nome}
          nome={post.nome}
          imagem={post.imagem}
          curtidoPor={post.curtidoPor}
          curtidas={post.curtidas}
          conteudo={post.conteudo}
        />
      ))}
      
    </div>
  );
}

function Post(props) {
  const [liked, setLiked] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  const [curtidas, setCurtidas] = React.useState(props.curtidas);

  function like() {
    setLiked(!liked);
    !liked ? setCurtidas(curtidas + 1) : setCurtidas(curtidas - 1);
  }

  function save() {
    setSaved(!saved);
  }

  function numberWithDot(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={props.imagem} alt="" />
          {props.nome}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img onDoubleClick={!liked? like : () => {}} src={props.conteudo} alt="" />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              onClick={like}
              name={liked ? "heart" : "heart-outline"}
              style={
                liked ? { color: "#ed4956" } : { color: "#000000" }
              }></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              onClick={save}
              name={saved ? "bookmark" : "bookmark-outline"}></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src="assets/img/respondeai.svg" alt="" />
          <div className="texto">
            Curtido por <strong>{props.curtidoPor}</strong> e{" "}
            <strong>outras {numberWithDot(curtidas)} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
