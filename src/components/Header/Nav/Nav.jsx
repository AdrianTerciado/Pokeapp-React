import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="nav">
            <ul>
                <li><Link to='/' className='link'>Home</Link></li>
                <li><Link to='/new' className='link'>New</Link></li>
            </ul>
        </nav>
    )
}

export default Nav