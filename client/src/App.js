import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home';
import PerrosCreate from './components/PerrosCreate/PerrosCreate';
import Detalle from './components/Detalle/Detalle';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path= '/' component={LandingPage}/>
        <Route path= '/home' component={Home}/>
        <Route path= '/dogs' component={PerrosCreate}/>
        <Route path= '/home/:id' component={Detalle}/>
      </Switch>
      <h1>A eso le llamas Perro?</h1>
    </div>
    </BrowserRouter>
  );
}

export default App;
