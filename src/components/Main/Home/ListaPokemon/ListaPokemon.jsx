import Card from "../Search/Card/Card";

function ListaPokemon({ lista }) {

    const paintList = () => {
        return lista.map((item) =>
            <Card pokemonInfo={item} articleSize="card-small" imgSize="img-small"></Card>
        )
    }

    return (
        <section className="lista-pokemon">
            {paintList()}
        </section>
    )
}

export default ListaPokemon