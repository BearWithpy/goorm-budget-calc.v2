import { resetMessage, setMsg, setShowMessage } from "features/msg/messageSlice"

export const displayMessage = (message: string) => (dispatch: any) => {
    dispatch(setMsg(message))
    dispatch(setShowMessage(true))

    setTimeout(() => {
        dispatch(resetMessage())
    }, 1500)
}
