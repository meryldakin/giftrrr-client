const gift = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case type.ADD_GIFT:
      //
      return state;
    case type.REMOVE_GIFT:
      //  
      return state;
    default:
      return state;
  }
};

export default gift;
