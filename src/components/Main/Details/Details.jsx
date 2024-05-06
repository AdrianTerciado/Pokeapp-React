import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ListaContext } from '../../../context/ListaContext';

function Details() {

    const { lista } = useContext(ListaContext);
    const pokemonId = useParams();

    const [pokemon] = lista.filter(item => item.id == pokemonId.id);

    const firstChar = pokemon.name[0].toUpperCase();
    const restString = pokemon.name.slice(1);
    const name = firstChar + restString;

    const strNum = pokemon.id.toString();
    const formattedNum = strNum.padStart(3, '0');
    const number = `#${formattedNum}`;

    return (
        <section className="details">
            <article className='img-card'>
                <p className="number-card"> {number} </p>
                <img src={pokemon.sprites.other.home.front_default} className="img-details" />
                <h2>{name}</h2>
            </article>
            <article className='info'>
                <p>Aquí iría datos</p>
                <p>Más datos</p>
                <p>Más info</p>
            </article>
        </section>
    )
}

export default Details