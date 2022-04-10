import React from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiagramProject, faListCheck, faUsers, faUser} from "@fortawesome/free-solid-svg-icons";


const NavMenu = (is_auth, log_out) => {
    let login_logout_btn;
    if (is_auth) {
        login_logout_btn = <button className="nav-link text-light" onClick={log_out}><FontAwesomeIcon icon={faUser}/> Logout</button>;
        console.log('Y');
    } else {
        login_logout_btn = <NavLink exact to="/login" className="nav-link text-light" activeClassName="active text-dark"><FontAwesomeIcon icon={faUser}/> Login</NavLink>;
        console.log('N');
    }

    return (
        <nav className="navbar navbar-dark bg-dark pb-0 mb-4 text-white">
            <div className="container">
                <ul className="nav nav-tabs nav-dark">
                    <li className="nav-item">
                        <NavLink exact to="/" className="nav-link text-light" activeClassName="active text-dark">
                            <FontAwesomeIcon icon={faUsers}/> Пользователи
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/projects" className="nav-link text-light"
                                 activeClassName="active text-dark">
                            <FontAwesomeIcon icon={faDiagramProject}/> Проекты
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to="/todo" className="nav-link text-light" activeClassName="active text-dark">
                            <FontAwesomeIcon icon={faListCheck}/> ToDo
                        </NavLink>
                    </li>
                </ul>
                <div className="d-flex align-items-center w-50">
                    <form className="w-100 mb-1">
                        <input type="search" className="form-control" placeholder="Поиск..." aria-label="Search"/>
                    </form>
                </div>
                <ul className="nav nav-tabs nav-dark">
                    <li className="nav-item">
                        {login_logout_btn}
                        {/*{is_authenticated*/}
                        {/*    ? <button className="nav-link text-light" onClick={}>*/}
                        {/*        <FontAwesomeIcon icon={faUser}/> Logout*/}
                        {/*    </button>*/}
                        {/*    : <NavLink exact to="/login" className="nav-link text-light"*/}
                        {/*               activeClassName="active text-dark">*/}
                        {/*        <FontAwesomeIcon icon={faUser}/> Login*/}
                        {/*    </NavLink>}*/}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavMenu;