import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import Services from "../sections/Services";
import WhyChooseUs from "../sections/WhyChooseUs";
import AyurvedaTreatments from "../sections/AyurvedaTreatments";
import PainTreatment from "../sections/PainTreatment";
import ConsultationBanner from "../sections/ConsultationBanner";
import Testimonials from "../sections/Testimonials";
import LocationMap from "../sections/LocationMap";
import ScrollAnimation from "../components/ScrollAnimation";

function Home() {
    return (
        <>
            <Hero />
            <ScrollAnimation animation="fade-up">
                <Intro />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
                <Services />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
                <WhyChooseUs />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
                <AyurvedaTreatments />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
                <PainTreatment />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
                <ConsultationBanner />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
                <Testimonials />
            </ScrollAnimation>
            <ScrollAnimation animation="fade-up" delay={100}>
                <LocationMap />
            </ScrollAnimation>
        </>
    );
}

export default Home;
