import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scladItems: [
    { name: "kisti", type: 1, count: 1000 },
    { name: "schetka", type: 1, count: 1000 },
    { name: "sponzh", type: 1, count: 1000 },
    { name: "bit1", type: 2, count: 1000 },
    { name: "nozh", type: 3, count: 1000 },
    { name: "salfetka-stirka", type: 4, count: 1000 },
    { name: "bumagka-stirka", type: 4, count: 1000 },
    { name: "test", type: 8, count: 1000 },
    { name: "test", type: 9, count: 1000 },
    { name: "test", type: 10, count: 1000 },
  ],
  finishProducts: [],
  myMoney: 0,
  users: [{ login: "rrr", password: "123" }],
  isAuth: false,
};

export const skladSlice = createSlice({
  name: "sklad",
  initialState,
  reducers: {
    isAuthCheck: (state, action) => {
      const authUser = state.users.filter(
        (el) =>
          el.login === action.payload.login &&
          el.password === action.payload.password
      );
      if (authUser.length === 1) {
        state.isAuth = true;
        console.log("j");
      }
    },
    logout: (state) => {
      state.isAuth = false;
    },

    addNewUser: (state, action) => {
      state.users.push({login: action.payload.login, password:action.payload.password})
    },

    changeSklad: (state, action) => {
      const changedItem = state.scladItems.filter(
        (item) => item.type === action.payload[0]
      );
      changedItem.forEach((el) => {
        el.count -= action.payload[1];
      });
    },

    addMoney: (state, action) => {
      state.myMoney += action.payload;
    },

    addFinishProduct: (state, action) => {
      console.log(action.payload);
      if (state.finishProducts.find((el) => el.name === action.payload[0])) {
        state.finishProducts.find(
          (el) => el.name === action.payload[0]
        ).quantity += action.payload[1];
      } else {
        state.finishProducts.push({
          name: action.payload[0],
          quantity: action.payload[1],
        });
      }
    },
  },
});

export const { changeSklad, addMoney, addFinishProduct, isAuthCheck, logout } =
  skladSlice.actions;
export default skladSlice.reducer;
