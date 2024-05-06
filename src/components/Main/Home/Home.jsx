import { useState, useContext } from 'react'
import ListaPokemon from './ListaPokemon/ListaPokemon'
import Search from './Search/Search'

function Home () {

    return (
    <section className='home'>
        <Search />
        <ListaPokemon />
    </section>
    )
}

export default Home