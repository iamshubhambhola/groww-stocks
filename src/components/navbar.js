import React from 'react';
import styles from '../styles/navbar.module.css';
import SearchIcon from '@mui/icons-material/Search';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const Navbar = () => {
    return (
        <nav className={styles.navWrapper}>
            < div className={styles.nav}>
                <div className={styles.navLogo}>GrowwStonks<TrendingUpIcon /></div>
                <div className={styles.navSearch}>
                    <input type="text" placeholder="Search stocks and ETFs"></input>
                    <button type="submit"><SearchIcon /></button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
