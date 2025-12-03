
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Companies } from "./components/Companies";
import { SupportSection } from "./components/SupportSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { BenefitsSection } from "./components/BenefitsSection";
import { PricingSection } from "./components/PricingSection";
import { TestimonialsSection } from "./components/TestimonialsSection";

function App() {
    return (
        <Layout>
            <Header />
            <main className="space-y-20">
                <Hero />
                <Companies />
                <SupportSection />
                <FeaturesSection />
                <BenefitsSection />
                <PricingSection />
                <TestimonialsSection />
            </main>
        </Layout>
    );
}

export default App;
