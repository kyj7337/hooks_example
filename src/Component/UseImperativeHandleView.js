import React, {
  useImperativeHandle,
  forwardRef,
  useRef,
  useState,
} from "react";

const MyInput = forwardRef((props, ref) => {
  // forwardRef는 전달받은 ref 어트리뷰트를 하부 트리 내의 다른 컴포넌트로 전달하는 React 컴포넌트를 생성합니다.
  const [val, setVal] = useState("");
  // 내부에서 ref를 걸고.
  const inputRef = useRef();

  // 이 훅으로 부모에서 전달된 ref 에 반환할 값을 지정함
  useImperativeHandle(ref, () => ({
    // 여기서는 딷 blur() 함수 하나만 반환함
    blur: () => {
      document.title = val;
      inputRef.current.blur();
    },
  }));

  return (
    <input
      ref={inputRef}
      val={val}
      onChange={(e) => setVal(e.target.value)}
      {...props}
      placeholder="blur 될때 함수 실행"
    />
  );
});

const App = () => {
  // 빈 ref 만든 후
  const ref = useRef(null);
  const onBlur = () => {
    console.log(ref.current); // Only contains one property!
    // useImperativeHandle 에서 반환한 blur() 메소드 호출해서
    // 간접적으로 자식 컴포넌트를 조작
    ref.current.blur();
  };

  // 전달을 해주면 forwardRef 타고 들어가서 리턴을 받아옴
  return (
    <div>
      <h3>
        7. useImperativeHandle 사용예제
        <span style={{ color: "red" }}> (상세 설명 부족)</span>
      </h3>
      <MyInput ref={ref} onBlur={onBlur} />
    </div>
  );
};

export default App;

// 사용할일이 많이 있을지 의문
