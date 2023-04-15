import { configureStore } from "@reduxjs/toolkit";
import pickSliceReducer from "./pickSlice"

const store = configureStore({
    reducer: {
        pickSliceReducer: pickSliceReducer
    }
})

export default store