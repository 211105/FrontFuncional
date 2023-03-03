import '../stylesheets/NavbarDashboard.css'


const NavbarDashboard = (props) => {
    return (
        <div className="container-navbarDasboard">
            <div className='container-circle-people-navbarDasboard'>
                <div className='circle-people-navbarDasboard'>

                </div>
            </div>
            <div className='container-buttons-navbar-navbarDasboard'>

                <div className='item'>
                    <button onClick={() => {props.tipe(0)}}>Products</button>
                </div>
                <div className='item'>
                    <button onClick={() => {props.tipe(1)}}>Add products</button>
                </div>
                <div className='item'>
                    <button onClick={() => {props.tipe(2)}}>no idea</button>
                </div>
                <div className='item'>
                    <button onClick={() => {props.tipe(3)}}>Profile</button>
                </div>

            </div>
            <div className='more'>

            </div>
        </div>
    )
}

export default NavbarDashboard