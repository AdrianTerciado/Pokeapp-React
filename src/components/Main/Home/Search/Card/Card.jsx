import { Link } from 'react-router-dom'
/* import { useContext } from 'react'
import { PokemonContext } from '../../../../../context/PokemonContext' */

function Card({ pokemonInfo, articleSize, imgSize }) {

/*     const { updatePokemonID } = useContext(PokemonContext);
    
    updatePokemonID(pokemonInfo.id); */

    const firstChar = pokemonInfo.name[0].toUpperCase();
    const restString = pokemonInfo.name.slice(1);
    const name = firstChar + restString;

    const strNum = pokemonInfo.id.toString();
    const formattedNum = strNum.padStart(3, '0');
    const number = `#${formattedNum}`;

    const img = pokemonInfo.sprites.other.dream_world.front_default;

    return (
        <article className={articleSize} key={pokemonInfo.id}>
            <Link to={`/pokemon/${pokemonInfo.id}`} >
                <p className="number-card"> {number} </p>
                <img src={img} className={imgSize} />
                <p className="pokemon-name"> {name} </p>
            </Link>
        </article>
    )
}

export default Card