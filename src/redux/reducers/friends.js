const friends = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
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
