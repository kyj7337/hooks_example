import React from "react";
import Child from "./Child";

Prop.propTypes = {};

function Prop(props) {
  return (
    <div>
      Prop
      <Child a={3} validate={() => alert("hi")} />
    </div>
  );
}

export default Prop;
