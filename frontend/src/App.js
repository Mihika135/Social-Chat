import "./App.css";
import Home from "./Pages/Homepage";
import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chats from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/chats">
            <Chats />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
