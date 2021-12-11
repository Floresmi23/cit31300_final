import React from "react";
import Post from "./pages/Post";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Nav from "./pages/Nav";
import Television from "./pages/Television";
import Color from "./pages/Color";



function App() {
  const [data]=React.useState([{name:"Michael", car:"chevy"}, {name:"Tim", car:"Dodge"}, {name:"Jerry", car:"Ford"}])
  data.map((itm, idx)=>
      <Post key={idx} data={itm}/>
  );
  return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/games"} component={Games}/>
            <Route path={"/television"} component={Television}/>
            <Route path={"/color/:id"} component={Color}/>
          </Switch>

        </div>
      </Router>


  );
}

export default App;
