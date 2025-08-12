import styles from "./page.module.css";
import { Sponsors, EventInfoSection, Hero, CallToAction, FeaturesSection, PhotoGallery} from "@/app/components";

export default function Home() {
    return (
        <div className={styles.page}>
            <Hero/>
            <EventInfoSection/>
            <PhotoGallery/>
            <FeaturesSection/>
            <CallToAction/>
        </div>
    );
}
