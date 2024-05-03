import React, { useEffect, useState } from 'react';
import Card from "./Card/Card";
import '../../../../styles/components/_Search.scss'; // Importa el archivo Sass

function Search({ lista, setLista }) {

    const [input, setInput] = useState("");
    const [pokemon, setPokemon] = useState(null);
    const [pokemonInfo, setPokemonInfo] = useState({});
    const [contador, setContador] = useState(0);

    function handleChange(e) {
        
        setInput(e.target.value);

        if (contador) {
            clearTimeout(contador)
        }

        setContador(setTimeout(() => {
            setPokemon(e.target.value.toLowerCase());
            e.target.value = "";
        }, 3000))
      
    }

    function handleSubmit(e) {
        e.preventDefault();
        setPokemon(input.toLowerCase());  
        e.target.newPokemon.value = "";      
    }

    useEffect(() => {
        const getPokemon = async () => {
            if (!pokemon) {
                console.log("No hay pokemon");
            }
            else if(lista.some(item => item.name == pokemon || item.id == pokemon)) {
                alert("Ese pokemon ya está en la lista")
            }
            else{
                const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                const data = await resp.json();
                setPokemonInfo(data);
                setLista([
                    data,
                    ...lista
                ]);
            }
        }
        getPokemon();
    }, [pokemon]);

    return (
        <>
            <section className="search">
                <div className='background-result'>
                {Object.keys(pokemonInfo).length === 0
                    ? null
                    : <Card pokemonInfo={pokemonInfo} articleSize="card-large" imgSize="img-large"></Card>
                }
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <input type="text" className="input-form" name="newPokemon" placeholder="What Pokemon are you looking for?" onChange={handleChange} />
                    <button type="submit" className="button-form">Search</button>
                </form>
            </section>
        </>
    )
}

export default Search