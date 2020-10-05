import React, { useState } from 'react';
import { Link } from 'react-router-dom'
const AdminNavBar = () => {

    const [value, setValue] = useState(false)

    const handleShowAdminNav = () => {

        if(!value) {
            setValue(true)
        } else {
            setValue(false)
        }


    }

    // TODO:: show only to role admin
    const Nav = () => {

        if (!value) return null

        return (
            <nav>
                <Link to="/reports">
                    Reports
                </Link>
                <Link to="/logs">
                    Logs
                </Link>

                <Link to="/config">
                    Config
                </Link>

            </nav>
        )
    }
    return (
        <div id="admin-nav">
            <span
                className="admin-toggle"
                onClick={handleShowAdminNav}
            >
                Admin Menu
            </span>
            <Nav/>

        </div>
    );
};

export default AdminNavBar;