'use client'

import styles from './Header.module.css';
import Logo from './logo.png'
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {Button, CountdownTimer} from "@/app/components";

export const Header = () => {
    const [isShrunk, setIsShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsShrunk(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            id="header"
            className={`${styles.header} ${isShrunk ? styles.shrunk : ''}`}
        >
            <div className={styles.container}>
                <div className={styles.flexBetween}>
                    <div className={styles.logoSection}>
                        <div className={styles.iconWrapper}>
                            {isShrunk && <CountdownTimer isSticky targetDate="10.26.2025"/>}
                            {!isShrunk && (
                                <Image className={styles.img} src={Logo} alt='logo' width={isShrunk ? 150 : 200}/>
                            )}
                        </div>
                        <div>
                            {!isShrunk && (
                                <>
                                    <h1 className={styles.title}>UTHealth Houston Half Marathon</h1>
                                    <p className={styles.subtitle}>October 26, 2025</p>
                                </>
                            )}
                        </div>
                    </div>

                    <nav className={styles.nav}>
                        <span className={styles.navItem}>Race Info</span>
                        <span className={styles.navItem}>Register</span>
                        <span className={styles.navItem}>Training</span>
                        <span className={styles.navItem}>Results</span>
                        <Button variant="secondary">Register Now</Button>
                    </nav>

                    <button className={styles.mobileMenuButton} aria-label="Open menu">
                        <svg
                            className={styles.menuIcon}
                            aria-hidden="true"
                            focusable="false"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};
