/* eslint-disable no-unused-vars */
// useReducer 를 사용하면 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 장점이 있음.
// useState 의 대체 함수로 사용될 수 있다.

import React, { useReducer } from "react";
// -------------------------------------------------------
// --------------------- Component -----------------------
// -------------------------------------------------------

//
// InputComponent
//
// ==> useReducer 를 사용해서 useState 를 일일이 사용하지 않고, e.target.name 으로 input 의 값을 하나의 함수로 받아올 수 있다. (코드 길이 간소화)

const _inputReducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value,
  };
};

const InputComponent = () => {
  const [state, dispatch] = useReducer(_inputReducer, { ID: "", PW: "" });
  const _inputOnChange = (e) => {
    dispatch(e.target);
  };
  //   console.log(state);
  return (
    <div>
      <b>Use Reducer 예제 2</b>
      <br />
      <input
        name="ID" // name 설정
        onChange={_inputOnChange}
        type="text"
        placeholder="아이디"
      />
      <br />
      <br />
      <input
        name="PW" // name 설정
        onChange={_inputOnChange}
        type="password"
        placeholder="비밀번호"
      />
    </div>
  );
};

// -------------------------------------------------------
// --------------------- Component -----------------------
// -------------------------------------------------------

const _plusMinusReducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(_plusMinusReducer, { value: 0 });
  //   console.log(state);
  return (
    <div>
      <h3>3. Use Reducer 예제</h3>
      <br />
      <span>useState 사용예제 1 의 변형</span>
      <div>
        <br />
        <button onClick={() => dispatch({ type: "INCREASE" })}>+</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        &nbsp; state 값 : {state.value}
      </div>
      <br />
      <br />
      <InputComponent />
    </div>
  );
};

export default UseReducer;
