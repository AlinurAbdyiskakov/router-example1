import classes from "./Cantacts.module.css";
import {Link, Route, Switch}  from "react-router-dom";

const Cantacts = () => {

  return (
    <div className={classes.Cantacts}>
  <Link to="/personal">personal</Link>
  <Link to="/business">business</Link>
  <Switch>
<Route path="/Cantacts/personal"  render={() => <h1>heloo woed</h1>} />
<Route path="/Cantacts/business"  render={() => <h1>heloo woed</h1>} /></Switch>
    </div>
  );
}

export default Cantacts; 