import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/Login/Login";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
