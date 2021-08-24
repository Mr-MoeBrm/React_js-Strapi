import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Home from './components/home';
import Offres from './components/Offres';
import OffreDetail from './components/offreDetail';
function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Offers" component={Offres} />
            <Route exact path="/Offers/:id" component={OffreDetail}/>
          </Switch>
      </div>
      </Router>
  );
}

export default App;
