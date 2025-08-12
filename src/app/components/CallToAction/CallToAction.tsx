"use client";

import styles from "./CallToAction.module.css";
import { FC } from "react";

export const CallToAction: FC = () => {
    return (
        <section id="cta" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Ready to Join Us?</h2>
                <p className={styles.subtitle}>
                    Register now for the UTHealth Houston Half Marathon 10K and be part
                    of Houstons premier running event
                </p>
                <div className={styles.actions}>
                    <button className={styles.registerButton}>Register Today</button>
                    <button className={styles.downloadButton}>Download Guide</button>
                </div>
            </div>
        </section>
    );
};
