import UseFriendStatus from "./UseFriendStatus";

function FriendStatus(props) {
  const isOnline = UseFriendStatus(props.friend.id);

  if (isOnline === null) {
    return "Loading...";
  }
  return isOnline ? "Online" : "Offline";
}

export default FriendStatus;
