import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface TotalState {
    total: number
}

const initialState: TotalState = {
    total: 0,
}

const totalSlice = createSlice({
    name: "total",
    initialState,
    reducers: {
        setTotal(state, action: PayloadAction<number>) {
            state.total = action.payload
        },
    },
})

export const { setTotal } = totalSlice.actions
export default totalSlice.reducer
