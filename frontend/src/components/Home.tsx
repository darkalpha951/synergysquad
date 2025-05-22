import HeroSection from './HeroSection';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import FeaturesSection from './FeaturesSection';
import AnalysisSection from './AnalysisSection';
import TeamSection from './TeamSection';
import Footer from './Footer';

function Home() {
     
    return (
        <>  
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <FeaturesSection />
            <AnalysisSection />
            {/* <TeamSection /> */}
            <Footer />
        </>
    )
}

export default Home;