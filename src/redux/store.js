import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./cartSlice.js";
import orderReducer from "./orderSlice.js";

const store = configureStore({
	reducer: {
		cart: createReducer,
		order: orderReducer,
	}
})

export default store;