import About from"./Components/About/About";
import Home from"./components/Home/Home";
import Cantacts from"./components/Cantacts/Cantacts";

import {Route, Switch} from "react-router";
import { NavLink } from "react-router-dom";
import logo from "./imges/logo.svg"
import './App.css';
function App() {
  return (
   
    <div className="App">
      
      
      <div className="Toolbar">
      <img src={logo} alt="animal"/>
    
<ul>
         <li>
      
      <NavLink activeCalassName="active" to="/"exact>Home</NavLink>
      </li>
      <li>
      
      <NavLink activeCalassName="active" to="/about">about</NavLink>
      </li>
      <li>
      
      <NavLink activeCalassName="active" to="/cantacts">cantacts</NavLink>
      </li></ul>
     
   </div>
   <div className="Drower">

 
        <ul>
      <li>
      
      <NavLink activeCalassName="active" to="/jaz">jaz</NavLink>
      </li>
      <li>
      
      <NavLink activeCalassName="active" to="/bass">bass</NavLink>
      </li>
      <li>
      
      <NavLink activeCalassName="active" to="/rep">rep</NavLink>
      </li>
      <li>
      
      <NavLink activeCalassName="active" to="/jam">jam</NavLink>
      </li>
      <li>
      
      <NavLink activeCalassName="active" to="/mashina">mashina</NavLink>
      </li>
      <li>
      
      <NavLink activeCalassName="active" to="/cantacts1">cantacts1</NavLink>
      </li>
      <li>
      
      <NavLink activeCalassName="active" to="/down">down</NavLink>
      </li>
      </ul>
   </div>
   <div className="dom">
     <Switch>
     <Route path="/" component={Home} exact/>
      <Route path="/about" component={About} />
      <Route path="/Cantacts" component={Cantacts} />
      
      <Route path="/" render={() => <h1>heloo woed</h1>}/>
</Switch>

</div>
    </div>
  );
}

export default App;
