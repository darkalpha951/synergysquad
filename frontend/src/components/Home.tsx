import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import FeaturesSection from './FeaturesSection';
import AnalysisSection from './AnalysisSection';
import Footer from './Footer';
import VoiceBot from './VoiceBot';

function Home() {
     
    return (
        <>  
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <FeaturesSection />
            <AnalysisSection />
            <VoiceBot />
            <Footer />
        </>
    )
}

export default Home;