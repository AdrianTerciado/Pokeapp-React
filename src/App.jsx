import { BrowserRouter } from 'react-router-dom'
import './styles/styles.scss';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <BrowserRouter >
        <Header></Header>
        <Main></Main>
      </BrowserRouter >
      <Footer></Footer>
    </>
  )
}

export default App