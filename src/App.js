import './App.css';
//pages
import Cart from "./components/pages/Cart";
import Admin from "./components/pages/Admin";
import FirePage from "./components/pages/FirePage";
import UserInfo from "./components/pages/UserInfo";


import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./components/core/Nav";

function App() {
  return (
      <Router>
        <div className="App">
          <Nav/>
          <Switch>
            <Route exact path={"/"} component={FirePage}/>
            <Route path={"/cart"} component={Cart}/>
            <Route path={"/admin"} component={Admin}/>
              <Route exact path={"/UserInfo/:id"} component={UserInfo}/>
          </Switch>

        </div>
      </Router>
  );
}

export default App;
