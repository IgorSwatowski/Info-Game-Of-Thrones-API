import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';

// Components =======================
import Root from './views/Root';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import CharactersList from './views/Characters/CharactersList';

function App() {
  return (
    <Router>
      <Menu />
        <>
          <Switch>
            <Route path="/characters">
              <CharactersList/>
            </Route>
            <Route path="/">
              <Root/>
            </Route>
          </Switch>
          <Footer/>
        </>
    </Router>
  );
}

export default App;
