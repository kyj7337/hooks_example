/* eslint-disable react-hooks/exhaustive-deps */

// useEffect 는 기본적으로 렌더링 되고 난 직후마다 실행된다. 두번째 파라미터에 무엇을 넣는지에 따라 실행되는 조건 달라짐.

import React, { useEffect, useState } from "react";
import { dummy, apiURL } from "./etc";

const UseEffectView = () => {
  const [idState, setIdState] = useState();
  const [pwState, setPwState] = useState(null);
  const [apiData, setApiData] = useState({});
  const [visible, setVisible] = useState(true);

  const _setId = (e) => {
    setIdState(e.target.value);
  };

  const _setPw = (e) => {
    setPwState(e.target.value);
  };

  const _visibleHandler = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    // useEffect 예제 1
    // useEffect 의 두번째 인자로 배열에 특정 값을 넣어주게 되면 해당 특정값이 변경될 때만 실행된다.
    console.log("아이디가 변경될 때 실행, useEffect 예제 1");
  }, [idState]);

  useEffect(() => {
    // useEffect 예제 1
    // useEffect 의 두번째 인자로 배열에 특정 값을 넣어주게 되면 해당 특정값이 변경될 때만 실행된다.
    console.log("비밀번호가 변경될 때 실행, useEffect 예제 1");
  }, [pwState]);

  useEffect(() => {
    // useEffect 예제 2
    //useEffect 의 두번째 인자로 빈 배열 [] 을 넣어주게 되면 didmount 와 같은 역할을 한다. (첫 렌더 될 때만 실행)
    console.log("첫 렌더될때만 실행(didmount 의 역할), useEffect 예제 2");
    fetch(apiURL, { method: "get" })
      .then((res) => res.json())
      .then((res) => {
        console.log("API 응답값 ", res.data.content);
        setApiData(res.data.content);
      });
  }, []);

  useEffect(() => {
    // useEffect 예제 3
    // 컴포넌트 언마운트 되기 전 or 업데이트 직전에 작업 수행할 때 쓰는 방법
    //
    // * visible 값이 바뀔때만 실행 + visible 값이 바뀌기 직전에 작업수행 *
    console.log("visible 값====>", visible);
    return () => {
      alert("보이기/숨기기 버튼을 누르셨죠 ? 바뀌기 직전에 실행됩니다.");
      // visible 값이 바뀌기 직전에 실행된다.
      // 보이기/숨기기 버튼을 클릭하여 visible 값이 바뀌기 직전에 작업을 할 수 있다.
    };
  }, [visible]);
  return (
    <div>
      <div>
        <h3>2. useEffect 사용예제</h3>
      </div>
      <br />
      <br />
      <div>
        <div>
          <b>UseEffect 예제 1</b> (특정값이 변할때마다 실행
          (componentDidUpdate))
        </div>
        <input onChange={_setId} type="text" placeholder="아이디" />
        <input onChange={_setPw} type="password" placeholder="비밀번호" />
      </div>
      <br />
      <div>
        <b>UseEffect 예제 2</b> (첫 렌더될 때만 실행 (componentDidmount) )
        <div>
          리모핏 API 에서 받아온 값을 state에 저장한 뒤 나오는 값 =====>
          <b>{apiData[0] && apiData[0].createDt}</b>
        </div>
      </div>
      <br />
      <div>
        <b>useEffect 예제 3</b> (컴포넌트 언마운트 되기 전 or 업데이트 직전 작업
        수행)
        <div>
          <button onClick={_visibleHandler}>
            {visible ? "숨기기" : "보이기"}
          </button>
          {visible ? <div>{dummy}</div> : null}
        </div>
      </div>
    </div>
  );
};

export default UseEffectView;
