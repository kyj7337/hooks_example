import React from "react";
import UseStateView from "./Component/UseStateView";
import UseEffectView from "./Component/UseEffectView";
import UseReducerView from "./Component/UseReducerView";
// import UseMemoView from "./Component/UseMemoView";
import UseMemoView2 from "./Component/UseMemoView2";

const App = () => {
  return (
    <div className="App">
      <UseStateView />
      <hr />
      <UseEffectView />
      <hr />
      <UseReducerView />
      <hr />
      {/* <UseMemoView /> */}
      <UseMemoView2 />
    </div>
  );
};

export default App;
