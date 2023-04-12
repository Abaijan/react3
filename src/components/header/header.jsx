import React from 'react'
import './header.scss'
import imgFlg from '../images/flag-usa.svg'
import iconPrifile from '../images/Profile.svg'
import logo from '../images/logo.svg'
import SearchLogo from '../images/iconSearch.svg'
import favourite from '../images/favourite.svg'
import basket from '../images/basket.svg'
import home from '../images/homeicon.svg'
const header = () => {
    return (
        <header className='header'>
            <div className="header_above">
                <div className="container">
                    <div className="header_above">
                        <div className="header_above_avaible">
                            <h4 className='header_above_avaible-text'>Avaible 24/7 at(405) 555-0128</h4>
                        </div>

                        <div className="header_above_info">
                            <a href="" className='header_above_info-navigation'>delivery & returns</a>
                            <a href="" className='header_above_info-navigation' >Track order</a>
                            <a href="" className='header_above_info-navigation'>Blog</a>
                            <a href="" className='header_above_info-navigation'>Contacts</a>
                        </div>
                        <div className="header_above_user-settings">
                            <img src={imgFlg} alt="" />
                            <select name="languages" id="" className='header-languages'>
                                <option value="english" className='header-languages-option' >Eng</option>
                                <option value="russinan" className='header-languages-option'>Rus</option>
                            </select>
                            <img src={iconPrifile} alt="" />
                            <a href="" className='header_above_info-navigation'><p>log in /</p></a><a href="" className='header_above_info-navigation'><p>Regster</p></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-inner">
                <div className="container">
                    <div className="header-inner">
                        <div className="header-inner-logo"><img src={logo} alt="" /></div>
                        <ul className="header-inner-menu">
                            <li className="header-inner-menu-items">Women</li>
                            <li className="header-inner-items">Men</li>
                            <li className="header-inner-items">Girls</li>
                            <li className="header-inner-items">Boys</li>
                            <li className="header-inner-items">Sale</li>
                        </ul>
                        <div className="header-inner-search">
                            <img src={SearchLogo} alt="" className="header-inner-search-icon" />
                            <input type="text" className="header-inner-search-input" placeholder='Search for products... ' />
                        </div>
                        <button className="theme">light</button>
                        <div className="header-inner-icons">
                            <div className="header-inner-icons-icon">
                                <img src={favourite} alt="" className="header-inner-favourite" />
                                <h5>2</h5>
                            </div>
                            <div className="header-inner-icons-icon">
                                <img src={basket} alt="" className="header-inner-basket" />
                                <h5>4</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-under">
                <div className="container">
                    <div className="header-under">
                        <div className="header-under-text">
                            <h2>Up to 70% Off </h2>
                            <a href="" className='header-under-text-a' >Shop our latest sale styles</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-under-navigation">
                <div className="container">
                    <div className="header-under-navigation-inner">
                        <img src={home} alt="" />
                        <p className='header-under-navigation-text'>Women</p>
                        <p className='header-under-navigation-text'>Clothes</p>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default header