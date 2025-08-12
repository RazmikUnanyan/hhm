"use client";

import styles from "./FeaturesSection.module.css";
import { FC, useEffect } from "react";
import { FaTrophy, FaUtensils, FaCamera } from "react-icons/fa6";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const featureVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const FeaturesSection: FC = () => {
    return (
        <section id="features" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Why Run With Us?</h2>
                    <p className={styles.subtitle}>Experience Houstons best running event</p>
                </div>
                <div className={styles.grid}>
                    <AnimatedFeature
                        icon={<FaTrophy className={styles.icon} />}
                        title="Finisher Medal"
                        description="Custom designed medal for all finishers"
                        custom={0}
                    />
                    <AnimatedFeature
                        icon={<FaUtensils className={styles.icon} />}
                        title="Post-Race Food"
                        description="Delicious refreshments at the finish"
                        custom={2}
                    />
                    <AnimatedFeature
                        icon={<FaCamera className={styles.icon} />}
                        title="Free Photos"
                        description="Professional race photography"
                        custom={3}
                    />
                </div>
            </div>
        </section>
    );
};

interface FeatureProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    custom?: number;
}

const AnimatedFeature: FC<FeatureProps> = ({ icon, title, description, custom }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            className={styles.feature}
            ref={ref}
            variants={featureVariants}
            initial="hidden"
            animate={controls}
            custom={custom}
            transition={{ delay: (custom ?? 0) * 0.2 }}
        >
            <div className={styles.iconWrapper}>{icon}</div>
            <h3 className={styles.featureTitle}>{title}</h3>
            <p className={styles.featureDescription}>{description}</p>
        </motion.div>
    );
};
