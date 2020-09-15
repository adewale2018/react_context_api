import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducers";

//Initial State
const initialState = {
  users: [],
  isOpen: false,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };

  const addUser = (newUser) => {
    dispatch({
      type: "ADD_USER",
      payload: newUser,
    });
  };

  const editUser = (user) => {
    dispatch({
      type: "EDIT_USER",
      payload: user,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        isOpen: state.isOpen,
        removeUser,
        addUser,
        editUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
