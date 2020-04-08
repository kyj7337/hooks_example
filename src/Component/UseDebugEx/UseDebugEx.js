import React from "react";
import FriendListItem from "./FriendListItem";

const UseDebugEx = () => {
  return (
    <div>
      <div>
        <h3>
          9. useDebugValue 사용예제
          <span style={{ color: "red" }}>
            &nbsp;(react dev tool 에서 확인용)
          </span>
        </h3>
      </div>
      <FriendListItem friend={{ id: 1, name: "user 1" }} />
      <FriendListItem friend={{ id: 2, name: "user 2" }} />
      <FriendListItem friend={{ id: 3, name: "user 3" }} />
      <FriendListItem friend={{ id: 4, name: "user 4" }} />
      <FriendListItem friend={{ id: 5, name: "user 5" }} />
      <FriendListItem friend={{ id: 6, name: "user 6" }} />
    </div>
  );
};

export default UseDebugEx;
