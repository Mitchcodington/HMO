const counterReducer = (state = 4050, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state  +4050;
      case "DECREMENT":
        return state -4050;
      default:
        return state;
    }
  };
  export default counterReducer;