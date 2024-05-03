import React, { useEffect, useState } from 'react';
import Card from "./Card/Card"

function Search() {

    /*     const [input, setInput] = useState(""); */
    const [pokemon, setPokemon] = useState(null);
    const [pokemonInfo, setPokemonInfo] = useState({});

    /*     function handleChange(e) {
            setInput(e.target.value)
        } */

    function handleSubmit(e) {
        e.preventDefault();
        setPokemon(e.target.newPokemon.value.toLowerCase());
    }

    useEffect(() => {
        const getPokemon = async () => {
            if (pokemon) {
                const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                const data = await resp.json();
                setPokemonInfo(data);
            }
        }
        getPokemon();
    }, [pokemon]);

    console.log(pokemonInfo)

    return (
        <>
        <section className="search">
            {Object.keys(pokemonInfo).length === 0
            ? null
            : <Card pokemonInfo={pokemonInfo}></Card>
            }
            <form className="form" onSubmit={handleSubmit}>
                <input type="text" className="input-form" name="newPokemon" placeholder="What Pokemon are you looking for?" /* onChange={handleChange} */ />
                <button type="submit" className="button-form">Search</button>
            </form>
        </section>
        </>
    )
}

export default Search