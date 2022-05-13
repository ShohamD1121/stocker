const reducers = (emails = [], action) => {
  switch (action.type) {
    case "SEND":
      return [...emails, action.payload];
    case "GET_EMAILS":
      return action.payload;
    default:
      return emails;
  }
};

export default reducers;