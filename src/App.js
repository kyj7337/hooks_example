import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Ref from "./Ref";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/ref" component={Ref} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
