import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Switch } from "react-router";
import Home from "./components/Home";
import PlantForm from './components/PlantForm';
import NavBar from "./components/NavBar";
import PlantsContainer from './containers/PlantsContainer';
import TreesContainer from './containers/TreesContainer';


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
            <Route path = "/trees" render = {(routerProps) => <TreesContainer {...routerProps}/>}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
