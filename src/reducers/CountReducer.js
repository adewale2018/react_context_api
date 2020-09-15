function countReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}
