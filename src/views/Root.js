import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// Components =======================
import Home from '../views/Home/Home';
import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';
import CharactersList from '../components/CharactersList/CharactersList';

function Root() {
  return (
    <Router>
      <Menu />
        <>
          <Switch>
            <Route path="/characters">
              <CharactersList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer/>
        </>
    </Router>
  );
}

export default Root;
