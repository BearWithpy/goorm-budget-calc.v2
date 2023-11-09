import React from "react"

interface ProductProps {
    product: string
}

const Item = ({ product }: ProductProps) => {
    return <div className="p-4 w-35">{product}</div>
}

export default Item
