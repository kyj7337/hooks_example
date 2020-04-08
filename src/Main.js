import React from "react";
import UseStateView from "./Component/UseStateView";
import UseEffectView from "./Component/UseEffectView";
import UseReducerView from "./Component/UseReducerView";
import UseMemoView from "./Component/UseMemoView";
import UseCallbackkView from "./Component/UseCallbackView";
import UseRefView from "./Component/UseRefView";
import UseImperativeHandleView from "./Component/UseImperativeHandleView";
import UseLayoutEffectView from "./Component/UseLayoutEffectView";
import UseDebugEx from "./Component/UseDebugEx";

const Main = () => {
  return (
    <div>
      <UseStateView />
      <hr />
      <UseEffectView />
      <hr />
      <UseReducerView />
      <hr />
      <UseMemoView />
      <hr />
      <UseCallbackkView />
      <hr />
      <UseRefView />
      <hr />
      <UseImperativeHandleView />
      <hr />
      <UseLayoutEffectView />
      <hr />
      <UseDebugEx />
    </div>
  );
};

export default Main;
