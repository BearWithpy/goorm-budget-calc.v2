import React from "react"

import "./App.css"
import { Header } from "containers"
import { Main } from "containers"
import { ManageBox } from "containers"
import TotalBox from "components/MessageBox/TotalBox"

function App() {
    return (
        <div>
            <ManageBox />
            <Header />
            <Main />
            <TotalBox />
        </div>
    )
}

export default App
