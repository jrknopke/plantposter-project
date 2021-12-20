import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Switch } from "react-router";
import Home from "./components/Home";
import PlantForm from './components/PlantForm';
import NavBar from "./components/NavBar";
import PlantsContainer from './containers/PlantsContainer';
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route exact path = "/home" render = {(routerProps) => <Home {...routerProps} />}/>
            <Route exact path = "/plants" render = {(routerProps) => <PlantsContainer {...routerProps}/>}/>
            <Route path = "/plants/new" render = {(routerProps) => <PlantForm {...routerProps}/>}/>
            <Route path = "/counter" render = {(routerProps) => <Counter {...routerProps}/>}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
