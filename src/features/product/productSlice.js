import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  ordered: [],
  TotalPrice: 0,
  TotalProduct: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    AddProduct: (state, { payload }) => {
      state.products = payload;
    },
    increamentAmount: (state, { payload }) => {
      const item = state.products.find((prod) => prod.id == payload);
      if (item) {
        item.amount += 1;
      }
      productSlice.caseReducers.calculateTotal(state);
    },
    decreamentAmount: (state, { payload }) => {
      const item = state.products.find((prod) => prod.id == payload);
      if (item && item.amount > 0) {
        item.amount -= 1;
      }
      productSlice.caseReducers.calculateTotal(state);
    },
    AddToAmount: (state, { payload }) => {
      const item = state.products.find((prod) => prod.id == payload);
      if (item && !item.amount) {
        item.amount = 1;
      }
      productSlice.caseReducers.calculateTotal(state);
    },
    calculateTotal: (state) => {
      let allOrdersAmount = 0;
      let allOrderPrice = 0;
      state.products.forEach((prod) => {
        if (prod.amount) {
          allOrdersAmount += prod.amount;
          allOrderPrice +=
            prod.amount *
            (prod.price - (prod.price * prod.discountPercentage) / 100).toFixed(2);
        }
      });

      state.TotalProduct = allOrdersAmount;
      state.TotalPrice = allOrderPrice;
    },
    deleteAmount: (state, { payload }) => {
      const item = state.products.find((prod) => prod.id == payload);
      item.amount = 0;
      productSlice.caseReducers.calculateTotal(state);
    },
  },
});

export const {
  AddProduct,
  AddToAmount,
  decreamentAmount,
  increamentAmount,
  calculateTotal,
  deleteAmount,
} = productSlice.actions;

export default productSlice.reducer;
