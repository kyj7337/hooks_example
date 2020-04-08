### 훅스를 쓰는 이유

1. Hook는 계층 변화 없이 상태 관련 로직을 재사용할 수 있도록 도와줍니다.
2. Class 에서 사용되는 this 가 혼동을 준다.[블로그](https://overreacted.io/ko/how-are-function-components-different-from-classes/), [예시(code sandbox)](https://codesandbox.io/s/pjqnl16lm7) this 로 부터 가져오는 혼동때문에 hooks 를 사용 ..

---

#### > 정리할 내용

#### - 기초 Hooks

1.  useState

    - 함수형 컴포넌트에서 state 를 사용할 수 있게 한다.

2.  useEffect

    - useEffect 는 기본적으로 렌더링 되고 난 직후마다 실행된다. 두번째 파라미터에 무엇을 넣는지에 따라 실행되는 조건 달라짐.

3.  useContext _// context 를 사용하는 경우에 사용_

### - Hook의 변경이나 특정한 경우에만 필요함.

4.  useReducer

    - useReducer 를 사용해서 useState 를 일일이 사용하지 않고, e.target.name 으로 input 의 값을 하나의 함수로 받아올 수 있다.
      (코드 길이 간소화가 주목적)

5.  useMemo

    - 함수형 컴포넌트 내부에서 발생하는 연산 최적화

6.  useCallback

    - 렌더링 성능을 최적화해야 할 때 사용
    - 렌더링 자주 발생하거나 렌더링 할 컴포넌트 개수가 많아질 때 이벤트 함수 최적화에 사용

7.  useRef

    - class 에서 사용되는 ref 를 함수형 컴포넌트에서도 사용할 수 있게 하는 것.
    - ref 설명 (localhost:2900/ref)

8.  useImperativeHandle

    - refs를 통해 부모 컴포넌트에 노출되는 인스턴스 값을 커스터마이징한다.
    - 부모에서 자식의 ref 를 사용할 수 있다 ??
    - [참고](https://github.com/SeonHyungJo/react-hook-sample#8.-useImperativeHandle)

9.  useLayoutEffect

    - useEffect와 사용법이 동일하지만, 모든 DOM 변경 후에 동기적으로 발생.
    - 시각적인 업데이트를 막지 않도록 useLayoutEffect 보다 useEffect 를 사용하기 권한다고 함.
    - useEffect 를 사용해보고, 문제가 있을 시 사용하기를 권장함.
    - [useEffect or useLayoutEffect 비교 설명](https://daveceddia.com/useeffect-vs-uselayouteffect/)

10. useDebugValue

    - React-dev-tool 에서 hooks 의 value 확인할 때 사용.
    - ![image]("./src/Component/UseDebugEx/img/debug.png")
