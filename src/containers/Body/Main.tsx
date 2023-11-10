import React from "react"
import ItemInputForm from "components/Input/ItemInputForm"
import ItemList from "components/List/ItemList"

const Main = () => {
    return (
        <div className="m-6 p-5 border-solid border-2 border-gray-300 rounded">
            <ItemInputForm />
            <ItemList />
        </div>
    )
}

export default Main
