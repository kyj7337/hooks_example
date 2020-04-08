/* eslint-disable no-unused-vars */
// 렌더링 성능 최적화해야할 때 사용. 이벤트 핸들러 함수를 렌더될 때 마다 생성하는게 아니라 필요할 때만 생성하는 것
import React, { useState, useMemo, useCallback } from "react";

const _getAverage = (numbers) => {
  console.log("평균값 계산 중 ..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const _average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  // -----------useMemo에 사용된 기존 코드------------
  //
  //   const _onChange = (e) => {
  //     setNumber(e.target.value);
  //   };
  //
  // -----------useMemo에 사용된 기존 코드------------

  const _onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 빈 배열을 넣어줘야 첫 렌더 될 때 함수 생성함.

  // -----------useMemo에 사용된 기존 코드------------
  //
  //   const _onInsert = () => {
  //     const _nextList = list.concat(parseInt(number));
  //     setList(_nextList);
  //     setNumber("");
  //   };
  //
  // -----------useMemo에 사용된 기존 코드------------

  const _onInsert = useCallback(() => {
    const _nextList = list.concat(parseInt(number));
    setList(_nextList);
    setNumber("");
  }, [list, number]); // list 혹은 number 가 바뀔 때만 함수 생성한다. 의존하는 값을 배열내부에 넣어줘야 한다.

  const _avg = useMemo(() => _getAverage(list), [list]);

  return (
    <div>
      <h3>5. useCallback 사용예제(useMemo 함수와 코드 다름)</h3>
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
        {_avg}
      </div>
    </div>
  );
};

export default _average;
