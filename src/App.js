import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import News from "./components/testing/News";
import IndiaMart from "./components/indiamart/IndiaMart";
import Calender from "./components/calender/Calender";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";

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
            <Link to="/calender" className="links">
              Client Calender
            </Link>
            <Link to="/appliedjobs" className="links">
              Applied Jobs
            </Link>
            <Link to="/project4" className="links">
              Project 4
            </Link>
            <Link to="/project5" className="links">
              Project 5
            </Link>
          </div>
          <Switch>
            
            <div className='mainBox'>
              <Route exact path="/" component={News}></Route>
              <Route exact path="/im" component={IndiaMart}></Route>
              <Route exact path="/calender" component={Calender}></Route>
              <Route exact path="/appliedjobs" component={AppliedJobs}></Route>
              <Route exact path="/project5" component={News}></Route>
            </div>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
