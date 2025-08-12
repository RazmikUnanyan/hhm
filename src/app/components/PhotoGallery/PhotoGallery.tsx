"use client";

import styles from "./PhotoGallery.module.css";
import { FC, useEffect } from "react";
import { FaImages } from "react-icons/fa";
import { motion, Variants, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const photos = [
    {
        id: "photo-1",
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d0b0425151-2d725cbbd22e930de66e.png",
        alt: "Marathon runners Houston skyline finish line celebration",
    },
    {
        id: "photo-2",
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d33a967402-47ae27ce3ba7a964706c.png",
        alt: "Starting line energy runners downtown Houston morning",
    },
    {
        id: "photo-3",
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/bfff06f5ea-021f3993e7a3ed19a621.png",
        alt: "Medical Center route urban running landscape",
    },
    {
        id: "photo-4",
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/19476b162b-93a1f73e14f89cd48c87.png",
        alt: "Finish line medals celebration Texas themed decorations",
    },
    {
        id: "photo-5",
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d0b0425151-2d725cbbd22e930de66e.png",
        alt: "Panoramic Houston marathon crowd diverse runners Texas flag colors",
        wide: true,
    },
    {
        id: "photo-6",
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/d33a967402-47ae27ce3ba7a964706c.png",
        alt: "Volunteer support water station Houston marathon community",
    },
    {
        id: "photo-7",
        src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/bfff06f5ea-021f3993e7a3ed19a621.png",
        alt: "Post race celebration food refreshments happy runners",
    },
];

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const PhotoGallery: FC = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <section id="photo-gallery" className={styles.section}>
            <div className={styles.container} ref={ref}>
                <motion.div
                    className={styles.header}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.h2 className={styles.title} variants={itemVariants}>
                        Event Photos
                    </motion.h2>
                    <motion.p className={styles.subtitle} variants={itemVariants}>
                        Capturing the spirit of Houstons running community
                    </motion.p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    {photos.map((photo) => (
                        <motion.div
                            key={photo.id}
                            className={`${styles.photoWrapper} ${photo.wide ? styles.colSpan2 : ""}`}
                            variants={itemVariants}
                        >
                            <img
                                className={styles.image}
                                src={photo.src}
                                alt={photo.alt}
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className={styles.buttonWrapper}
                    variants={containerVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.button className={styles.button} variants={itemVariants}>
                        <FaImages className={styles.icon} />
                        View All Photos
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};
