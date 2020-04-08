import React, { useState, useCallback, useRef } from "react";
import { withRouter } from "react-router-dom";

const _average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const _onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 빈 배열을 넣어줘야 첫 렌더 될 때 함수 생성함.

  const _onInsert = useCallback(() => {
    const _nextList = list.concat(number);
    setList(_nextList);
    setNumber("");
    inputEl.current.focus();
    console.log("input 으로 focus됨");
  }, [list, number]); // list 혹은 number 가 바뀔 때만 함수 생성한다. 의존하는 값을 배열내부에 넣어줘야 한다.

  return (
    <div>
      <h2>Ref란?</h2>
      <a href="/ref">Ref 알아보기</a>
      <h3>6. useRef 사용예제(useCallback, useMemo 와 코드 다름)</h3>
      <input
        value={number}
        onChange={_onChange}
        placeholder="아이디"
        ref={inputEl}
      />
      <button onClick={_onInsert}>등록</button>
      <ul>
        {list.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default withRouter(_average);
