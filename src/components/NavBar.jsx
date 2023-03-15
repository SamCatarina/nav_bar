import { useRef } from 'react'
import './NavBar.css'
import { FaBars, FaTimes } from 'react-icons/fa'

function NavBar() {
    const navRef = useRef();

    const showNav = () =>{
        navRef.current.classList.toggle("responsive_nav");
    }

    return (

        <header>
            <h1>LOGO</h1>

            <nav ref={navRef}>

                <a href="#">About</a>
                <a href="#">About</a>
                <a href="#">About</a>
                <a href="#">About</a>
                <button className='nav-btn nav-btn-close'  onClick={showNav}>
                    <FaTimes />
                </button>

            </nav>

            <button  className='nav-btn' onClick={showNav}>
                <FaBars />
            </button>


        </header>

    )
}

export default NavBar