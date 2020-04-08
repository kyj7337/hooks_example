import React from "react";

import UseFriendStatus from "./UseFriendStatus.js";

function FriendListItem(props) {
  const isOnline = UseFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? "green" : "black" }}>{props.friend.name}</li>
  );
}

export default FriendListItem;
