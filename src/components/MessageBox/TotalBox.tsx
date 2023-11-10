import { RootState } from "app/store"
import { setTotal } from "features/total/totalSlice"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const TotalBox = (): JSX.Element => {
    const dispatch = useDispatch()
    const total = useSelector((state: RootState) => state.total.total)
    const items = useSelector((state: RootState) => state.items.items)

    useEffect(() => {
        const newTotal = items.reduce((sum, item) => {
            return sum + Number(item.expense)
        }, 0)
        dispatch(setTotal(newTotal))
    }, [items, dispatch])

    return (
        <div className="text-4xl font-bold text-right pr-6">
            Total: {total.toLocaleString()}
        </div>
    )
}

export default TotalBox
