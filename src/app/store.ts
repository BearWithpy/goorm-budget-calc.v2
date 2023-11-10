import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"
import itemsReducer from "features/item/itemsSlice"
import messageReducer from "features/msg/messageSlice"
import totalReducer from "features/total/totalSlice"

export const store = configureStore({
    reducer: {
        items: itemsReducer,
        message: messageReducer,
        total: totalReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
