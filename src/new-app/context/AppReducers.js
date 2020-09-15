export default (state, action) => {
  switch (action.type) {
    case "REMOVE_USER":
      return {
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case "ADD_USER":
      return {
        users: [action.payload, ...state.users],
        // users: state.users.concat(action.payload),
      };
    /*case "EDIT_USER":
      return {
        users: state.users.map((user) => {
          if (user.id === action.payload) {
            return { ...user, name: "Kunle" };
          }
          return user;
        }),
      };
      */
    case "EDIT_USER":
      const updatedUser = action.payload;
      const updateUser = state.users.map((user) => {
        if (user.id === updatedUser.id) {
          return updatedUser;
        }
        return user;
      });
      return {
        users: updateUser,
      };
    default:
      return state;
  }
};
