const occasions = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case type.ADD_OCCASION:
      //
      return state;
    case type.REMOVE_OCCASION:
      //  
      return state;
    default:
      return state;
  }
};

export default occasions;
