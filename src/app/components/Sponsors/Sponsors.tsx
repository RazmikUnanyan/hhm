"use client";

import styles from "./Sponsors.module.css";
import { FC } from "react";
import { motion } from "framer-motion";

const row1:  { name: string, color: string, size?: string }[] = [
    { name: "UTHealth", color: "orange", size: "large" },
    { name: "Nike", color: "blue" },
    { name: "Gatorade", color: "green" },
    { name: "Adidas", color: "purple" },
    { name: "Coca-Cola", color: "red" },
    { name: "Under Armour", color: "darkOrange" },
];

const row2:  { name: string, color: string, size?: string }[] = [
    { name: "Samsung", color: "indigo" },
    { name: "Shell", color: "yellow" },
    { name: "H-E-B", color: "teal" },
    { name: "T-Mobile", color: "pink" },
    { name: "AT&T", color: "gray" },
    { name: "Chase", color: "darkBlue" },
];

const animationVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    hover: { scale: 1.05 },
};

export const Sponsors: FC = () => {
    return (
        <section className={styles.section} id="sponsors-section">
            <div className={styles.header}>
                <h2 className={styles.title}>Our Sponsors</h2>
                <p className={styles.subtitle}>
                    Thank you to our amazing partners who make this event possible
                </p>
            </div>

            <div className={styles.container}>
                {[...row1, ...row2].map((sponsor, i) => (
                    <motion.div
                        key={i}
                        className={styles.card}
                        variants={animationVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <span
                            className={`${styles.name} ${styles[sponsor.color]} ${
                                sponsor?.size ? styles[sponsor.size] : ""
                            }`}
                        >
                            {sponsor.name}
                        </span>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
