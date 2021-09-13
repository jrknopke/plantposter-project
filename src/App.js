import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Switch } from "react-router";
import Home from "./components/Home";
import Plants from "./containers/Plants";
import PlantForm from './components/PlantForm';
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route exact path = "/home" render = {(routerProps) => <Home {...routerProps} />}/>
            <Route exact path = "/plants" render = {(routerProps) => <Plants {...routerProps}/>}/>
            <Route exact path = "/plants/new" render = {(routerProps) => <PlantForm {...routerProps}/>}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
