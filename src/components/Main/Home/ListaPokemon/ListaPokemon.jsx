import Card from "../Search/Card/Card";
import React, { useContext } from 'react';
import { ListaContext } from '../../../../context/ListaContext'

function ListaPokemon() {

    const { lista } = useContext(ListaContext);

    const paintList = () => {
        return lista.map((item, i) =>
            <Card pokemonInfo={item} key={i} articleSize="card-small" imgSize="img-small"></Card>
        )
    }

    return (
        <section className="lista-pokemon">
            {paintList()}
        </section>
    )
}

export default ListaPokemon