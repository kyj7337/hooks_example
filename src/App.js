import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Ref from "./Ref";
import Prop from "./Prop/Prop";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/ref" component={Ref} />
        <Route path="/prop" component={Prop} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
