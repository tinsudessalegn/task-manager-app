import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        inc : (state)=> {
            state.count += 1
        },
        dec : (state)=> {
            state.count -= 1
        },
        reset : (state) => {
            state.count = 0
        },
        incbyAmount: (state, action) => {
            state.count += action.payload
        }
    }
})

export const { inc, dec, reset, incbyAmount } = counterSlice.actions

export default counterSlice.reducer