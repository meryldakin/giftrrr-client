import * as api from './api/friend.js'

export const addFriend = friend => ({
  type: "ADD_FRIEND",
  payload: friend
});

export const addOccasion = occasion => ({
  type: "ADD_OCCASION",
  payload: occasion
});

export const addGift = gift => ({
  type: "ADD_GIFT",
  payload: gift
});

export const showFriends = () => {
  console.log("action show friends")
  return function(dispatch) {
    api
    .showFriends()
    .then(data => dispatch({ type: "SHOW_FRIENDS", payload: data }))
  }
}
