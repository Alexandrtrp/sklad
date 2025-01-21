import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { login: "rrr", password: "123", name: 'user' },
    { login: "admin", password: "cofe", name: 'admin' },
    
  ],
  isAuth: false,
  isAdmin: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isAuthCheck: (state, action) => {
      const authUser = state.users.filter(
        (el) =>
          el.login === action.payload.login &&
          el.password === action.payload.password
      );
      if (authUser.length > 0) {
        state.isAuth = true;
      }
      if(authUser.name==='admin') state.isAdmin = true
      
    },
    logout: (state) => {
      state.isAuth = false;
    },

    addNewUser: (state, action) => {
      console.log(action.payload);
      state.users.push({
        login: action.payload.login,
        password: action.payload.password,
        name: 'user'
      });
    },
  },
});

export const { isAuthCheck, logout, addNewUser } = authSlice.actions;
export default authSlice.reducer;
