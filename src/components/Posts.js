export default function Posts() {
  const posts = [
    {
      nome: "meowed",
      imagem: "assets/img/meowed.svg",
      curtidoPor: "respondeai",
      curtidas: "101.523",
    },
    {
      nome: "barked",
      imagem: "assets/img/barked.svg",
      curtidoPor: "adorable_animals",
      curtidas: "99.159",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post
          key = {post.nome}
          nome={post.nome}
          imagem={post.imagem}
          curtidoPor={post.curtidoPor}
          curtidas={post.curtidas}
        />
      ))}
      ;
    </div>
  );
}





function Post(props) {
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
          <img src="assets/img/gato-telefone.svg" alt="" />
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
            <img src="assets/img/respondeai.svg" alt="" />
            <div className="texto">
              Curtido por <strong>{props.curtidoPor}</strong> e{" "}
              <strong>outras {props.curtidas} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    );
}

