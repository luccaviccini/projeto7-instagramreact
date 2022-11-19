export default function Sugestoes(){    
    const sugestoes = [
      {
        nome: "bad.vibes.memes",
        imagem: "assets/img/bad.vibes.memes.svg",
        stats: "Segue Você",
      },
      {
        nome: "chibirdart",
        imagem: "assets/img/chibirdart.svg",
        stats: "Segue Você",
      },
      {
        nome: "razoesparaacreditar",
        imagem: "assets/img/razoesparaacreditar.svg",
        stats: "Novo no Instagram",
      },
      {
        nome: "adorable_animals",
        imagem: "assets/img/adorable_animals.svg",
        stats: "Segue Você",
      },
      {
        nome: "smallcutecats",
        imagem: "assets/img/smallcutecats.svg",
        stats: "Segue Você",
      },
    ];
        
    return (
      <div className="sugestoes">

        <div className="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {sugestoes.map((sugestao) => (
          <Sugestao key={sugestao.nome} nome={sugestao.nome} imagem={sugestao.imagem} stats = {sugestao.stats}/>
        ))}
        
      </div>
    ); 
}

function Sugestao(props){
    return (
      <div className="sugestao">
        <div className="usuario">
          <img src={props.imagem} alt="" />
          <div className="texto">
            <div className="nome">{props.nome}</div>
            <div className="razao">{props.stats}</div>
          </div>
        </div>

        <div className="seguir">Seguir</div>
      </div>
    );
}