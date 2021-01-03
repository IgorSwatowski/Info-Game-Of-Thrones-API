import { NavLink } from 'react-router-dom';

// Components =======================
import { Navigation, NavLi } from './styles/MenuStyles';

const Menu = () => {

    return(
        <Navigation>
            <NavLi>
                <NavLink 
                    exact to="/" 
                    style={{textDecoration: 'none', color: 'black'}} 
                    activeStyle={{fontWeight: "bold", color: "black"}}>
                    Home
                </NavLink>
            </NavLi>
            <NavLi>
                <NavLink 
                    to="/characters" 
                    style={{textDecoration: 'none', color: 'black'}} 
                    activeStyle={{fontWeight: "bold", color: "black"}}>
                    Characters
                </NavLink>
            </NavLi>
        </Navigation>
    )
}

export default Menu;