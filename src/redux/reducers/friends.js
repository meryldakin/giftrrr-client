const friends = (state = [{first_name: "fake friend"}], action) => {
  const { type, payload } = action;
  console.log("state in reducer", state)
  switch (type) {
    case "SHOW_FRIENDS":
      state = payload
      console.log("friends state", state)
      return state
    case type.ADD_FRIEND:
      //
      return state;
    case type.REMOVE_FRIEND:
      //
      return state;
    default:
      return state;
  }
};

export default friends;
