import React from "react"

interface TotalProps {
    total: string
}

const TotalBox = ({ total }: TotalProps): JSX.Element => {
    return (
        <div className="text-4xl font-bold text-right pr-6">Total: {total}</div>
    )
}

export default TotalBox
