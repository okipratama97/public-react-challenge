import { NavLink } from 'react-router-dom'

function NavBar () {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <img className="logo" src={process.env.PUBLIC_URL + '/app-logo.png'} alt="logo" />
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <NavLink className="nav-link" exact to="/" activeStyle={{
                fontWeight: "bold",
                color: "grey"
              }}>Home </NavLink>
            </li>
            <li class="nav-item">
              <NavLink className="nav-link" to="/locations" activeStyle={{
                fontWeight: "bold",
                color: "grey"
              }}>Favorite</NavLink>
            </li>
          </ul>
      </nav>
    </>
  )
}

export default NavBar