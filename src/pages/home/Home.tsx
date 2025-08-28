import Card from "../card/Card"

function Home() {
  return (
    <>
        <h1>Componente Home</h1>
        <Card titulo="Bem vindo!" texto="Espero que dê bom!" img="https://i.redd.it/superman-eras-discussion-threads-new-52-v0-jq9qp8z6844c1.jpg?width=1040&format=pjpg&auto=webp&s=250993fd60d10f2b9ec6a54570297b79f5002196"/>
        <Card titulo="Tudo bem!" texto="Espero que tudo dê certo!" img="https://preview.redd.it/thoughts-on-new-52-superman-v0-6drmj27lfs2e1.jpg?width=640&crop=smart&auto=webp&s=6389a2458365f33748005c0fb168e1fb2787d741"/>
        <Card titulo="Superman: O maior herói de todos" texto="Superman, O Homem de Aço" img="https://www.howtolovecomics.com/wp-content/uploads/2025/04/action-comics-1087-cover.webp" />

    </>
  )
}

export default Home