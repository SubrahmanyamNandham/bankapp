import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Accounts from "./components/Accounts";
import BankerLogin from "./components/BankerLogin";
import CustomerLogin from "./components/CustomerLogin";
import Customer from "./components/Customer";
import Account from "./components/Account";
import EveryUser from "./components/EveryUser";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/customerLogin" component={CustomerLogin} />
      <Route exact path="/" component={Home} />
      <Route exact path="/account/:userId" component={Account} />
      <Route exact path="/user/:userId" component={EveryUser} />
      <Route exact path="/bankLogin" component={BankerLogin} />
      <Route exact path="/account" component={Accounts} />
      <Route exact path="/user" component={Customer} />
    </Switch>
  </BrowserRouter>
);

export default App;
