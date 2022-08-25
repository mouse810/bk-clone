import { Search, Home, Info, ConnectWithoutContact } from '@mui/icons-material'
import React from 'react'
import NavLogo from '../../Utility/Images/Navbar/Logo.png'
import './TopNavbar.css'

const TopNavbar = () => {
    return (
        <div>

            <nav className="topNavbar">
                <div className="topNavbar__logo">
                    <img src={NavLogo} alt="My Logo" />
                    <p>My Logo</p>
                </div>
                <div className="topNavbar__text">
                    <h2>Enjoy Our Content</h2>
                </div>
                <div className="topNavbar-mid__center">
                    <div className='topNavbar__options'><Home fontSize='large' sx={{ color: 'green' }} />Home</div>
                    <div className='topNavbar__options'><Info fontSize='large' sx={{ color: 'blue' }} />About</div>
                    <div className='topNavbar__options'><ConnectWithoutContact fontSize='large' sx={{ color: 'red' }} />Contact</div>
                </div>
                <div className="topNavbar__search">
                    <Search className='topNavbar__search-icon' fontSize='large' />
                    <input className='topNavbar__searchBar' style={{fontSize:'20px', paddingLeft:'50px', active:'none'}} type="search" />
                </div>
            </nav>
        </div>
    )
}

export default TopNavbar