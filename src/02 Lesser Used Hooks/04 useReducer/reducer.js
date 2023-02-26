export const reducer = (count, action) => {
  switch (action.type) {
    case "increment":
      return count + 1;

    case "decrement":
      return count - 1;

    case "reset":
      return 0;

    case "change-count":
      return count + action.payload.amount;

    default:
      return count;
  }
};
