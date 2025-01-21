import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { path: "bit004", price: 4, id: 2, mnozh: 4, name: "Bit-004" },
    { path: "kisti003", price: 8, id: 1, mnozh: 1, name: "Kisti-003" },
    { path: "nozh", price: 7, id: 3, mnozh: 1, name: "Нож" },
    {
      path: "salfetka-stirka",
      price: 15,
      id: 4,
      mnozh: 1,
      name: "Салфетки для стирки",
    },
  ],
  scladItems: [
    { name: "kisti", type: 1, count: 1000, id: "1" },
    { name: "schetka", type: 1, count: 1000, id: "2" },
    { name: "sponzh", type: 1, count: 1000, id: "3" },
    { name: "bit1", type: 2, count: 1000, id: "4" },
    { name: "nozh", type: 3, count: 1000, id: "5" },
    { name: "salfetka-stirka", type: 4, count: 1000, id: "6" },
    { name: "bumagka-stirka", type: 4, count: 1000, id: "7" },
    { name: "test1", type: 8, count: 1000, id: "8" },
    { name: "test2", type: 9, count: 1000, id: "9" },
    { name: "test3", type: 10, count: 1000 },
  ],
  skladChina: [
    { name: "test1", type: 8, count: 10000, id: "8" },
    { name: "test2", type: 8, count: 10000, id: "9" },
  ],
  finishProducts: [],
  myMoney: 0,
};

export const skladSlice = createSlice({
  name: "sklad",
  initialState,
  reducers: {
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
      const changeItem = state.finishProducts.find((el) => el.name === action.payload[0])
      if (changeItem) {
        changeItem.quantity += action.payload[1];
      } else {
        state.finishProducts.push({
          name: action.payload.name,
          quantity: action.payload.quantity,
        });
      }
    },

    movingItem: (state, action) =>{
      const changedItem = state.scladItems.find(item=>item.id===action.payload.id)
      const changedChinaItem = state.changeItem.find(item=>item.id===action.payload.id)
      changedItem.count +=action.payload.count
      changedChinaItem.count -=action.payload.count
    }
  },
});

export const { changeSklad, addMoney, addFinishProduct, movingItem } = skladSlice.actions;
export default skladSlice.reducer;
