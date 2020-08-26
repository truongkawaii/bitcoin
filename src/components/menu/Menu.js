import React from 'react';
import logo from '../../assets/img/coingecko-logo-d13d6bcceddbb003f146b33c2f7e8193d72b93bb343d38e392897c3df3e78bdd.webp';
import NavItem from './NavItem/NavItem'; 
const menu = () => {
    return (
      <div className="menu"> 
           <div className="logo">
             <img src={logo} alt="props"/>
           </div>
           <ul className="nav">
                <NavItem>Home</NavItem>
                <NavItem>Markets</NavItem>
                <NavItem>Defi</NavItem>
                <NavItem>Exchanges</NavItem>
                <NavItem>News</NavItem>
                <NavItem>Tools</NavItem>
                <NavItem>Resources</NavItem>
                <NavItem>Learn</NavItem>
                <NavItem>Community</NavItem>
            </ul>
            <input className="search" type="text" placeholder="Search ..."/>
      </div>
    );
}

export default menu;
