import { SidebarData } from "../SidebarData";
import './style.css';
import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
    return (<div className={`navbar-container ${props.show ? 'show' : ''}`}>
        <div className="nav-item">
            <AiIcons.AiOutlineClose onClick={props.toggleSidebar} />
        </div>
        {SidebarData.map(item => {
            return <div className="nav-item">
                <Link to={item.path}>
                    {item.icon}
                    <span className="nav-title">{item.title}</span>
                </Link>
            </div>
        })}
    </div>);
}

export default NavBar;