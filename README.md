### 훅스를 쓰는 이유

1. Hook는 계층 변화 없이 상태 관련 로직을 재사용할 수 있도록 도와줍니다.
2. Class 에서 사용되는 this 가 혼동을 준다.![예제 블로그](https://overreacted.io/ko/how-are-function-components-different-from-classes/), ![예시(code sandbox)](https://codesandbox.io/s/pjqnl16lm7)
   this 로 부터 가져오는 혼동?

---

> 정리할 내용

- 기초 Hooks

1. useState
2. useEffect
3. useContext // context 를 사용하는 경우에 사용

- Hook의 변경이나 특정한 경우에만 필요함.

4. useReducer
5. useMemo
6. useCallback
7. useRef
8. useImperativeHandle
9. useLayoutEffect
10. useDebugValue
