import React, { useState, useLayoutEffect, useEffect } from "react";

const UseLayoutEffectView = () => {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 10);
    }
    if (value === 1) {
      alert("확인을 누르면 value 값이 1로 변경되어 표시됩니다.");
    }
  }, [value]);

  useEffect(() => {
    if (value === 2) {
      alert("확인을 누르기 전에 이미 Value 값이 2로 표시됩니다.");
    }
  }, [value]);
  // console.log("render", value);

  //   --------------------------
  //   useEffect 사용시
  //   --------------------------
  //   1. state의 변화가 생기거나, 부모의 state가 바뀌어 랜더된다.
  //   2. component가 re-render 된다.
  //   3. 화면이 시각적으로 변경이 된다. (2번에 의해 re-render 되므로)
  //   4. re-render 후에 useEffect 실행

  //   --------------------------
  //   useLayoutEffect 사용시
  //   --------------------------
  //   1. state의 변화가 생기거나, 부모의 state가 바뀌어 랜더된다.
  //   2. component가 re-render 된다.
  //   3. useEffectLayout 실행된다, 화면이 useEffectLayout이 완료될 때까지 기다린다.
  //   4. 화면이 시각적으로 변경이 된다.

  //
  //   -----------사용법은 useEffect 와 동일하다.----------
  //
  return (
    <div>
      <h3>8. useLayoutEffect 사용예제</h3>
      <div>
        value:<b>{value}</b>
      </div>
      <br />
      {/* <button onClick={() => setValue(0)}>value 값 랜덤 변경</button> */}
      <div>
        <button onClick={() => setValue(1)}>
          useLayoutEffect 사용하여 value 값 변화 확인
        </button>
        <button onClick={() => setValue(2)}>
          useEffect 사용하여 value 값 변화 확인
        </button>
      </div>
    </div>
  );
};

export default UseLayoutEffectView;
