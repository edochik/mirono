import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./cartSlice.js";
import orderReducer from "./orderSlice.js";
import goodsSlice from "./goodsSlice.js";

const store = configureStore({
	reducer: {
		cart: createReducer,
		order: orderReducer,
		goods: goodsSlice,
	}
})

export default store;