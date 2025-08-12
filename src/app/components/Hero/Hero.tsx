"use client";

import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { motion, Variants } from "framer-motion";
import { Button, CountdownTimer } from "@/app/components";
import { useParallax } from "@/hooks";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.4, ease: "easeOut" },
    },
};

export const Hero = () => {
    const MotionButton = motion(Button);
    const offsetY = useParallax(1);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkWidth = () => setIsMobile(window.innerWidth < 700);
        checkWidth();
        window.addEventListener("resize", checkWidth);
        return () => window.removeEventListener("resize", checkWidth);
    }, []);

    return (
        <section className={styles.hero}>
            <div
                className={styles.container}
                style={{
                    transform: isMobile
                        ? "none"
                        : `translateY(${offsetY * 0.5}px)`,
                }}
            >
                {/* Left content */}
                <div>
                    <div className={styles.location}>
                        <motion.div className={styles.texasBlueBlock} />
                        <motion.div className={styles.texasRedBlock} />
                        <motion.span className={styles.locationText}>
                            Houston, Texas
                        </motion.span>
                    </div>

                    <h1 className={styles.title}>
                        UTHealth Houston Half Marathon
                    </h1>

                    <p className={styles.description}>
                        Experience the heart of Texas through 13.1 miles of
                        Houston&apos;s most iconic neighborhoods. Join thousands
                        of runners in this premier racing event.
                    </p>

                    <div className={styles.buttons}>
                        <MotionButton variant="primary">
                            Register Today
                        </MotionButton>
                        <MotionButton variant="secondary">
                            View Course Map
                        </MotionButton>
                    </div>
                </div>

                {/* Right image + countdown */}
                <div className={styles.imageWrapper}>
                    <motion.img
                        src="https://houstonhalf.com/wp-content/uploads/2018/02/HSHM17MS00396.jpg"
                        alt="Houston city skyline with runners in foreground, Texas flag colors, professional photography"
                        className={styles.image}
                        loading="lazy"
                    />
                    <motion.div variants={itemVariants}>
                        <CountdownTimer targetDate="10.26.2025" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
