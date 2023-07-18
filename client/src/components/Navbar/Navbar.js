import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <header className="bg-dark shadow shadow-lg p-1">
          <div className="d-flex justify-content-between">
            <Link to="/" className='text-decoration-none text-light'><h1 className="fw-bold fs-1 text-light">MySql-React</h1></Link>
            <Link to='/all' className='text-decoration-none text-light'><p className="text-light m-3">Employee List</p></Link>
          </div>
        </header>
    )
}