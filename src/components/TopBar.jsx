import React from 'react'

import { Link,useLocation } from 'react-router-dom';
import "../styles.css";

function TopBar() {
  let {pathname} = useLocation()
  return <>
  
    <nav className="navbar navbar-expand-lg bg-secondary text-uppercase custom-navbar" style={{ padding: '8px', marginBottom: '10px'}} id="mainNav">
            <div className="container">
                <a className="navbar-brand" href="#page-top">User Information</a>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                
                    <ul className="navbar-nav ms-auto">
                    
                        <li className="nav-item mx-0 mx-lg-1"><Link to='/dashboard' className={`nav-link py-3 px-0 px-lg-3 rounded ${pathname==='/'?'active':""} `} href="#portfolio">Users</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link to='/create' className={`nav-link py-3 px-0 px-lg-3 rounded ${pathname==='/create'?'active':""}`} href="#about">Add User</Link></li>
                        
                    </ul>
                </div>
            </div>
        </nav>

      
  </>
}

export default TopBar