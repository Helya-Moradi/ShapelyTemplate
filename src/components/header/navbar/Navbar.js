import './Navbar.css';
import {IoChevronDown,IoSearch,IoMenu} from 'react-icons/io5';

function Navbar (){
    return(
       <div className="navbarContainer">
          <h1 className="nav-logo">Shapely Template</h1>
          <nav>
            <ul className="nav">
                <li className="nav-item">Home</li>
                <li className="nav-item">Blog</li>
                <li className="nav-item">Portfolio</li>
                <li className="nav-item">Aboutthetests<span className='down-arrow'><IoChevronDown/></span></li>
                <li className="nav-item">Level1<span className='down-arrow'><IoChevronDown/></span></li>
                <li className="nav-item">Shop</li>
                <li className="nav-item"><i className='search-icon'><IoSearch/></i></li>
            </ul>
          </nav>
          <div className="menu-ico">
             <IoMenu/>
          </div>
       </div>
    )
}

export default Navbar;