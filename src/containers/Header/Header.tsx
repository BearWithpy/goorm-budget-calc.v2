import MyImage from "images/budget.png"

const Header = (): JSX.Element => {
    return (
        <div className="flex text-5xl font-bold m-6">
            <img
                src={MyImage}
                alt="main-img"
                style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            <h1>Budget Calculator</h1>
        </div>
    )
}

export default Header
