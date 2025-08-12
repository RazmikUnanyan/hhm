"use client";

import styles from "./EventInfoSection.module.css";
import { FC } from "react";
import { FaCalendarDay, FaMapMarkerAlt, FaRoute } from "react-icons/fa";

export const EventInfoSection: FC = () => {
    return (
        <section id="event-info" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Event Information</h2>
                    <p className={styles.subtitle}>
                        Join thousands of runners in Houstons premier half marathon event
                    </p>
                </div>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <FaCalendarDay className={styles.icon} />
                        <h3 className={styles.cardTitle}>Date</h3>
                        <p className={styles.cardTextMain}>October 26, 2025</p>
                        <p className={styles.cardTextSub}>Sunday Morning</p>
                    </div>
                    <div className={styles.card}>
                        <FaMapMarkerAlt className={styles.icon} />
                        <h3 className={styles.cardTitle}>Location</h3>
                        <p className={styles.cardTextMain}>Downtown Houston</p>
                        <p className={styles.cardTextSub}>Texas Medical Center</p>
                    </div>
                    <div className={styles.card}>
                        <FaRoute className={styles.icon} />
                        <h3 className={styles.cardTitle}>Distance</h3>
                        <p className={styles.cardTextMain}>Half Marathon & 10K</p>
                        <p className={styles.cardTextSub}>Multiple Options</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
