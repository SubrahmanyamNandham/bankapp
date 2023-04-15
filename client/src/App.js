import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Accounts from "./components/Accounts";
import BankerLogin from "./components/BankerLogin";
import CustomerLogin from "./components/CustomerLogin";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/customer" component={CustomerLogin} />
      <Route exact path="/" component={Home} />
      <Route exact path="/bank" component={BankerLogin} />
      <Route exact path="/account" component={Accounts} />
    </Switch>
  </BrowserRouter>
);

export default App;
