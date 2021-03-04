import '../App.css'
import { NavLink } from 'react-router-dom'

function NavBar () {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light nav-bg-custom">
        <img className="logo" src={process.env.PUBLIC_URL + '/app-logo.png'} alt="logo" />
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/" activeStyle={{
                fontWeight: "bold",
                color: "grey"
              }}>Home </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/favorites" activeStyle={{
                fontWeight: "bold",
                color: "grey"
              }}>Favorites</NavLink>
            </li>
          </ul>
      </nav>
    </>
  )
}

export default NavBar