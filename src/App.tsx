import React from "react"

import "./App.css"
import { Header, TotalBox, Main, ManageBox } from "containers"

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
