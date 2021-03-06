import React from 'react';
import { Link } from "react-router-dom";
import styles from './Header.module.scss'

const Header = () => {

    return (
        <div className={styles.header}>
            <Link to="/">Home</Link>
            <Link to="/todos">Todos</Link>
        </div>
    )
}

export default Header