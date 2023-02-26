const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
  RESET: "reset",
  CHANGE_COUNT: "change-count",
};

const reducer = (count, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return count + 1;
    case ACTIONS.DECREMENT:
      return count - 1;
    case ACTIONS.RESET:
      return 0;
    case ACTIONS.CHANGE_COUNT:
      return count + action.payload.amount;
    default:
      return count;
  }
};

export default reducer;
