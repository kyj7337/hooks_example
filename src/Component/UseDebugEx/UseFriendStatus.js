import { useState, useEffect, useDebugValue } from "react";

const ChatAPI = {
  subscribeToFriendStatus: (id, handleStatusChange) => {
    handleStatusChange({ isOnline: id % 2 === 0 ? true : false });
  },
  unsubscribeFromFriendStatus: (id, handleStatusChange) => {
    handleStatusChange({ isOnline: false });
  },
};

function useFriendStatus(friendID) {
  const date = new Date();
  //   console.log(date);
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  // Show a label in DevTools next to this Hook
  // e.g. "FriendStatus: Online"
  // useDebugValue(isOnline ? "Debug Online" : "Debug Offline")

  // Permit to format the text to be exibed on debug (can only use one for function)

  useDebugValue(date, (date) => date.toISOString());
  useDebugValue(isOnline, (isOnline) => isOnline);
  // useDebugValue 사용 시, react-dev-tools 에서 해당 Component 선택 후, hooks 탭을 살펴보면 DebugValue 라는 항목이 추가되는데, value 값을 확인할 수 있다.

  return isOnline;
}

export default useFriendStatus;
