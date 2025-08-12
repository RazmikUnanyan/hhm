"use client";

import { FC, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import styles from "./CountdownTimer.module.css";

interface CountdownTimerProps {
    targetDate: string | Date;
    isSticky?: boolean;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const calculateTimeLeft = (target: Date): TimeLeft => {
    const difference = target.getTime() - new Date().getTime();

    return {
        days: difference > 0 ? Math.floor(difference / (1000 * 60 * 60 * 24)) : 0,
        hours: difference > 0 ? Math.floor((difference / (1000 * 60 * 60)) % 24) : 0,
        minutes: difference > 0 ? Math.floor((difference / 1000 / 60) % 60) : 0,
        seconds: difference > 0 ? Math.floor((difference / 1000) % 60) : 0,
    };
};

export const CountdownTimer: FC<CountdownTimerProps> = ({ targetDate, isSticky=false }) => {
    const target = typeof targetDate === "string" ? new Date(targetDate) : targetDate;
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(target));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(target));
        }, 1000);

        return () => clearInterval(timer);
    }, [target]);

    return (
        <motion.div style={{position: isSticky ? "sticky" : "absolute"}} className={styles.infoBox} initial="hidden" animate="visible">
            <motion.div className={styles.infoItem} variants={itemVariants}>
                <motion.div className={styles.infoNumberBlue} variants={itemVariants}>
                    {timeLeft.days}
                </motion.div>
                <motion.div className={styles.infoLabel} variants={itemVariants}>
                    Days
                </motion.div>
            </motion.div>

            <motion.div className={styles.divider} />

            <motion.div className={styles.infoItem} variants={itemVariants}>
                <motion.div className={styles.infoNumberBlue} variants={itemVariants}>
                    {String(timeLeft.hours).padStart(2, "0")}
                </motion.div>
                <motion.div className={styles.infoLabel} variants={itemVariants}>
                    Hours
                </motion.div>
            </motion.div>

            <motion.div className={styles.divider} />

            <motion.div className={styles.infoItem} variants={itemVariants}>
                <motion.div className={styles.infoNumberRed} variants={itemVariants}>
                    {String(timeLeft.minutes).padStart(2, "0")}
                </motion.div>
                <motion.div className={styles.infoLabel} variants={itemVariants}>
                    Minutes
                </motion.div>
            </motion.div>

            <motion.div className={styles.divider} />

            <motion.div className={styles.infoItem} variants={itemVariants}>
                <motion.div className={styles.infoNumberRed} variants={itemVariants}>
                    {String(timeLeft.seconds).padStart(2, "0")}
                </motion.div>
                <motion.div className={styles.infoLabel} variants={itemVariants}>
                    Seconds
                </motion.div>
            </motion.div>
        </motion.div>
    );
};
