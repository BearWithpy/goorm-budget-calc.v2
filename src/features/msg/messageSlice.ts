import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface MessageState {
    msg: string
    showMessage: boolean
}

const initialState: MessageState = {
    msg: "",
    showMessage: false,
}

const messageSlice = createSlice({
    name: "msg",
    initialState,
    reducers: {
        setMsg(state, action: PayloadAction<string>) {
            state.msg = action.payload
        },
        setShowMessage(state, action: PayloadAction<boolean>) {
            state.showMessage = action.payload
        },
        resetMessage(state) {
            state.msg = "none"
            state.showMessage = false
        },
    },
})

export const { setMsg, setShowMessage, resetMessage } = messageSlice.actions
export default messageSlice.reducer
