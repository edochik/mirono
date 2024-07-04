import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./cartSlice.js";
import modalReducer from "./modalSlice.js";

const store = configureStore({
	reducer: {
		cart: createReducer,
		modal: modalReducer,
	}
})

export default store;