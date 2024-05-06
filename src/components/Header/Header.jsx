import logo from "../../assets/pokeapp.jpg"
import Nav from "./Nav/Nav"

function Header () {
    return (
    <header className="header">
        <img src={logo} className="logo"/>
        <Nav></Nav>
    </header>
    )
}

export default Header