import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Switch } from "react-router";
import Home from "./components/Home";
import PlantForm from './components/PlantForm';
// import PlantsContainer from './containers/PlantsContainer';
import NavBar from "./components/NavBar";
import PlantList from './components/PlantList';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route exact path = "/home" render = {(routerProps) => <Home {...routerProps} />}/>
            <Route exact path = "/plants" render = {(routerProps) => <PlantList {...routerProps}/>}/>
            <Route exact path = "/plants/new" render = {(routerProps) => <PlantForm {...routerProps}/>}/>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
