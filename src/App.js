import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import IndiaMart from "./components/indiamart/IndiaMart";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <div className="mainHeader">
            <Link to="/" className="links">
              Home
            </Link>
            <Link to="/im" className="links">
              IndiaMart
            </Link>

          </div>
          <Switch>
            
            <div className='mainBox'>
              <Route exact path="/im" component={IndiaMart}></Route>
            </div>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
