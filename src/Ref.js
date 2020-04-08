import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class Ref extends Component {
  focusInput = React.createRef(); // input 박스 포커스용 ref
  focusRadio1 = React.createRef();
  focusRadio2 = React.createRef();
  focusRadio3 = React.createRef();
  focusRadio4 = React.createRef();
  focusRadio5 = React.createRef();

  _handleFocus = () => {
    this.focusInput.current.focus();
    // focusInput 으로 지정한것(<input/>)에 focus 를 해라
    // ref 를 input 에 줬기 때문에 input 으로 가리킨다.
    //
    console.log("클릭 시 가리키는 DOM ", this.focusInput.current);
  };
  _radioFocus = (e) => {
    let value = e.target.value;
    if (value === "1") this.focusRadio1.current.checked = true;
    if (value === "2") this.focusRadio2.current.checked = true;
    if (value === "3") this.focusRadio3.current.checked = true;
    if (value === "4") this.focusRadio4.current.checked = true;
    if (value === "5") this.focusRadio5.current.checked = true;
    // 숫자버튼을 클릭하게 되면 라디오 버튼을 체크 할 수 있다. ref 사용
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.history.goBack();
          }}
        >
          뒤로
        </button>
        <h3>Ref</h3>
        <span>특정 DOM 에 접근해서 작업을 해야 할 때 ref 를 사용한다.</span>
        <br />
        <span>
          대부분 state 를 통해서 조작이 가능하지만 아래 상황은 ref 를
          사용해야한다.
        </span>
        <ul>
          <li>특정 input 에 포커스 주기</li>
          <li>스크롤 박스 조작</li>
        </ul>
        <div>
          <input
            className="test-input"
            ref={this.focusInput}
            placeholder='className="test-input"'
          />
          <button onClick={this._handleFocus}>클릭 시 input으로 포커스</button>
        </div>
        <hr />
        <div>
          <input ref={this.focusRadio1} type="radio" />
          &nbsp;
          <input ref={this.focusRadio2} type="radio" />
          &nbsp;
          <input ref={this.focusRadio3} type="radio" />
          &nbsp;
          <input ref={this.focusRadio4} type="radio" />
          &nbsp;
          <input ref={this.focusRadio5} type="radio" />
          <br />
          <button onClick={this._radioFocus} value="1">
            1
          </button>
          <button onClick={this._radioFocus} value="2">
            2
          </button>
          <button onClick={this._radioFocus} value="3">
            3
          </button>
          <button onClick={this._radioFocus} value="4">
            4
          </button>
          <button onClick={this._radioFocus} value="5">
            5
          </button>
          <br />
          <div>
            <br />
            숫자 버튼을 클릭하면 radio button 이 클릭 된다.
          </div>
        </div>
        <h3>
          Ref 는 클래스형 컴포넌트에서만 사용할 수 있다. 하지만 useRef 를
          사용하면 함수형에서도 사용할 수 있다.
        </h3>
      </div>
    );
  }
}

export default withRouter(Ref);
