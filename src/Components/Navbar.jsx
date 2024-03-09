import { Link } from "react-router-dom"

export function Navbar() {
    return (<>
        <div className="navbar">
            <ul>
                <li><Link to='/'>ALL</Link></li>
                <li><Link to='/fullstack'>FULL STACK DEVELOPER</Link></li>
                <li><Link to='/frontend'>FRONTEND DEVELOPER</Link></li>
                <li><Link to='/backend'>BACKEND DEVELOPER</Link></li>
            </ul>
        </div>
    </>)
}