import { BrowserRouter } from 'react-router-dom'
import './styles/styles.scss';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import { ListaContext } from './context/ListaContext'
import { PokemonContext } from './context/PokemonContext'

function App() {

  const [lista, setLista] = useState([]);
  const [pokemonID, setPokemonID] = useState(null);

  const updateLista = (newPokemon) => {
    setLista(newPokemon)
  };

  const listaData = {
    lista,
    updateLista
  }

  const updatePokemonID = (newID) => {
    setPokemonID(newID)
  };

  const PokemonIDdata = {
    pokemonID,
    updatePokemonID
  }

  return (
    <>
      <ListaContext.Provider value={listaData}>
        <BrowserRouter >
          <Header></Header>
          <PokemonContext.Provider value={PokemonIDdata}>
            <Main></Main>
          </PokemonContext.Provider>
        </BrowserRouter >
      </ListaContext.Provider>
      <Footer></Footer>
    </>
  )
}

export default App