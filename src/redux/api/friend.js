import { checkStatus, parseJSON } from "fetch-helpers";

export function addFriend(friend) {
  return fetch("localhost:3000/friends/add", {
    method: "POST",
    body: JSON.stringify(friend)
  })
    .then(checkStatus)
    .then(parseJSON);
}

export function showFriends() {
  return fetch("http://localhost:3000/friends")
    .then(res => res.json())
}
