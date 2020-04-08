/* eslint-disable no-unused-vars */
// useMemo는 모든 렌더링 시의 계산낭비를 방지하게 한다.
import React, { useState, useMemo } from "react";

const _getAverage = (numbers) => {
  console.log("평균값 계산 중 ..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const _average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const _onChange = (e) => {
    setNumber(e.target.value);
  };

  const _onInsert = () => {
    const _nextList = list.concat(parseInt(number));
    setList(_nextList);
    setNumber("");
  };

  const _avg = useMemo(() => _getAverage(list), [list]);

  return (
    <div>
      <h3>4. useMemo 사용예제</h3>
      <input
        value={number}
        type="number"
        onChange={_onChange}
        placeholder="숫자입력"
      />
      <button onClick={_onInsert}>등록</button>
      <ul>
        {list.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
      <div>
        <b>평균 : </b>
        {/* ======== useMemo 를 사용한 경우========== */}
        {/* _avg 는 useMemo 를 사용한 경우 list 의 값이 변경 될 때(button을 누를 때)만 _getAverage 를 호출한다. */}
        {_avg}

        {/* ======== useMemo 를 사용하지 않은 경우========== (주석 제거 후 확인가능) */}
        {/* 아래와 같이 _getAverage(list) 만 사용하면 input 에 값이 입력될 때 마다, _getAverage 함수를 호출하게 된다. */}
        {/* {_getAverage(list)} */}
      </div>
    </div>
  );
};

export default _average;
