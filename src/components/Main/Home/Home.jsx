import { useState } from 'react'
import ListaPokemon from './ListaPokemon/ListaPokemon'
import Search from './Search/Search'

function Home () {
    const [lista, setLista] = useState([])

    console.log(lista);

    return (
    <section className='home'>
        <Search 
            setLista={setLista} 
            lista={lista}/>
        <ListaPokemon lista={lista}/>
    </section>
    )
}

export default Home