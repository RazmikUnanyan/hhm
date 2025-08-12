import { useEffect, useState } from "react";

export const useParallax = (factor = 0.5) => {
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffsetY(window.scrollY * factor);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [factor]);

    return offsetY;
};
