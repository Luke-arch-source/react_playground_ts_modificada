interface cardProps{
    titulo: string;
    texto: string;
    op?: number;
    img: string;
}

function Card(props: cardProps) {
  return (
    <>
        <h1>Card</h1>
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
        <img src={props.img} alt="" />
        

    </>
  )
}

export default Card

