import { checkStatus, parseJSON } from "fetch-helpers";

export function addFriend(friend) {
  return fetch("localhost:49910/friends/add", {
    method: "POST",
    body: JSON.stringify(friend)
  })
    .then(checkStatus)
    .then(parseJSON);
}
