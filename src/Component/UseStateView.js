import React, { useState } from "react";

const UseStateView = () => {
  // 1. useState의 괄호 에는 초기 state 값을 넣어준다.
  // 2. 배열안의 state 는 해당 state의 상태를 나타낸다.
  // 3. setState 는 this.setState() 와 같은 역할을 한다.
  // 4. 여러개의 state 를 만들 때는, 여러 useState 를 사용한다.

  const [state, setState] = useState(0);
  const [handler, setHandler] = useState(null);
  // console.log("state==>", state);
  // console.log("handler===>", handler);

  const _onPlus = () => {
    setState(state + 1);
  };
  const _onMinus = () => {
    setState(state - 1);
  };
  return (
    <div>
      <div>
        <div>
          <h3>1. useState 사용예제</h3>
          <br />
        </div>
        <button onClick={_onPlus}>+</button>
        <button onClick={_onMinus}>-</button>
        &nbsp; <span>state 값 : {state}</span>
      </div>
      <div>
        <button
          onClick={() => {
            setHandler("true");
          }}
        >
          true
        </button>
        <button
          onClick={() => {
            setHandler("false");
          }}
        >
          false
        </button>
        &nbsp; <span>{handler}</span>
      </div>
      <br />
    </div>
  );
};

export default UseStateView;
