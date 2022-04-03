import React from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiagramProject, faListCheck, faUsers} from "@fortawesome/free-solid-svg-icons";


const NavMenu = () => {
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
                        <NavLink exact to="/projects" className="nav-link text-light" activeClassName="active text-dark">
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

                    {/*Auth menu*/}

                    {/*<div className="flex-shrink-0 dropdown">*/}
                    {/*    <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle"*/}
                    {/*       id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">*/}
                    {/*        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32"*/}
                    {/*             className="rounded-circle">*/}
                    {/*    </a>*/}
                    {/*    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">*/}
                    {/*        <li><a className="dropdown-item" href="#">New project...</a></li>*/}
                    {/*        <li><a className="dropdown-item" href="#">Settings</a></li>*/}
                    {/*        <li><a className="dropdown-item" href="#">Profile</a></li>*/}
                    {/*        <li>*/}
                    {/*            <hr className="dropdown-divider">*/}
                    {/*        </li>*/}
                    {/*        <li><a className="dropdown-item" href="#">Sign out</a></li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}

                </div>
            </div>
        </nav>
);
};

export default NavMenu;