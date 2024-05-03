function Card ({pokemonInfo}) {

    const firstChar = pokemonInfo.name[0].toUpperCase();
    const restString = pokemonInfo.name.slice(1);
    const name = firstChar+restString;

    const strNum = pokemonInfo.id.toString();

    const formattedNum = strNum.padStart(3, '0');
    const number = `#${formattedNum}`;

    const img = pokemonInfo.sprites.other.dream_world.front_default;

    return (
        <article className="card">
            <p> {number} </p>
            <img src={img} className="img-pokemon" />
            <p> {name} </p>            
        </article>
    )
}

export default Card