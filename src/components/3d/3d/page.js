"use client"
import BackToTop from "@/component/backtotop/BackToTop";
import CtaThree from "@/component/cta/CtaThree";
import FooterOne from "@/component/footer/FooterOne";
import HeaderFive from "@/component/header/HeaderFive";
import Reusable3DShowcase from "@/component/hero/Reusable3DShowcase";
import SunvicInteractiveHero from "@/component/hero/SunvicInteractiveHero";
import RenovationShowcaseSection from "@/component/hero/RenovationShowcaseSection";
import RenovationPhaseSection from "@/component/hero/RenovationPhaseSection";
import ReusableWhyChoose from "@/component/whychoose/ReusableWhyChoose";
import ReusableAbout from "@/component/about/ReusableAbout";
import ServiceTwo from "@/component/service/ServiceTwo";
import ReusableAdvancedServices from "@/component/service/ReusableAdvancedServices";
import ProjectOne from "@/component/project/ProjectOne";
import { heroContent, homeRenovationContent, advancedRenovationServices } from "@/constants/content";


export default function Home5() {
    return (
        <div className="#">
            <HeaderFive />
            <div style={{ padding: '50px', }}>
               <Reusable3DShowcase 
                  models={["villa"]}
                  showNavigation={true}
                  showExplorePrompt={true}
                  height="100vh"
                  globalRotateSpeed={0.05}
                />
            </div>
            {/* ====================================================== */}
            {/* HOME RENOVATION SCROLLYTELLING SHOWCASE (NEW)          */}
            {/* ====================================================== */}
            <RenovationShowcaseSection />

            {/* ====================================================== */}
            {/* STRATEGIC SERVICES SECTION (TOP 3 SERVICES)            */}
            {/* ====================================================== */}
            <ServiceTwo />

            {/* ====================================================== */}
            {/* MODULAR RENOVATION CONTENT SECTIONS                    */}
            {/* ====================================================== */}
            
            {/* Why Choose Us - Renovation Focus */}
            <ReusableWhyChoose 
                preTitle={homeRenovationContent.whyChooseSections.hiddenCosts.preTitle}
                title={homeRenovationContent.whyChooseSections.hiddenCosts.title}
                description={homeRenovationContent.whyChooseSections.hiddenCosts.description}
                features={homeRenovationContent.whyChooseSections.hiddenCosts.features}
                image={
            <Reusable3DShowcase 
              models={["rome"]}
              showNavigation={true}
              showExplorePrompt={true}
              height="100vh"
              globalRotateSpeed={0.05}
            />
                }
                backgroundColor="transparent"
                reverse={false}
            />
            
            {/* ====================================================== */}
            {/* PREVIOUSLY EXISTING TEST COMPONENTS (RESTORED)         */}
            {/* ====================================================== */}
            <div style={{ padding: '50px', }}>
                {/* <SunvicInteractiveHero modelKey="rome" content={heroContent} /> */}

                {/* <Reusable3DShowcase 
                  models={["rome"]}
                  showNavigation={true}
                  showExplorePrompt={true}
                  height="100vh"
                  globalRotateSpeed={0.05}
                /> */}
            </div>

            <ProjectOne />
            <CtaThree />

            <FooterOne />
            <BackToTop />
        </div>
    );
}
