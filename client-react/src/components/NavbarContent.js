import React from 'react';


export default function NavContent(props) {

    const getNavLinkClass = path => {
        return props.location.pathname === path ? " active" : ""
    }

    return (
        <div className="container mt-5">
            <nav className="navbar bg-light px-0">

                <ul className="nav-content">
                    <li className={`nav-item${getNavLinkClass("/users/donasi")}`}>
                        <a className="nav-link px-0" href="/users/donasi">Donasi</a>
                    </li>
                    <li className={`nav-item${getNavLinkClass("/users/NewsPage")} px-3`}>
                        <a className="nav-link px-0" href="/users/NewsPage">Berita</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
