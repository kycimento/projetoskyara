import React from "react";
import { link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";


function Menu(props) {
    
    const linkBlue = "nav-link align-middle px-0";
    const linkBlack = "nav-link align-middle px-0 link-secondary";

    return <>
            <div className="d-flex flex-collumn align-itens-center align-itens-sm-start px-3 pt-2 text-white min-vh-100">

            <a href="/" className="d-flex align-itens-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-nome d-sm-inline">
                    <img src={logo} className="img-logo" />
                </span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-itens-sm-start" id="menu">

                    <li className="nav-item">
                        <link to="/dashboard" className={props.page == "dashboard" ? linkBlue : linkBlack}>
                            <i className="fs-4 bi bi-bar-chart"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                        </link>
                    </li>

                    <li className="nav-item">
                        <link to="/negocios" className={props.page == "negocio" ? linkBlue : linkBlack}>
                            <i className="=fs-4 bi bi-wallet2"></i> <span className="ms-1 d-none d-sm-inline">Negócios</span>
                        </link>
                    </li>

                </ul>
            </div>
        </>
}

export default Menu;