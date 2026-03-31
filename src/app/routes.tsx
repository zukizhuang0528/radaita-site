import { createBrowserRouter, Outlet } from "react-router";
import LandingPage from "../imports/LandingPage";
import Labeling from "../imports/Labeling";
import Llm from "../imports/Llm";
import { Home } from "./components/Home";
import { AboutUs } from "./components/AboutUs";
import { Teams } from "./components/Teams";
import { Contact } from "./components/Contact";
import { AutonomousDriving } from "./components/AutonomousDriving";
import { HealthcareAI } from "./components/HealthcareAI";
import { EmbodiedAI } from "./components/EmbodiedAI";
import { SpeechAI } from "./components/SpeechAI";
import { LLMIndustry } from "./components/LLMIndustry";
import { PlatformArchitecture } from "./components/PlatformArchitecture";
import { DataAnnotation } from "./components/DataAnnotation";
import { DataCollection } from "./components/DataCollection";
import { Pricing } from "./components/Pricing";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function Root() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden w-full relative font-sans flex flex-col">
      {/* Global Unified Header */}
      <Header />
      
      {/* Global styles to hide the original Figma headers inside LandingPage exports */}
      <style>{`
        div[data-name="Landing Page"] > div[data-name="Header"],
        div[data-name="Landing Page"] > div[data-name="Dropdown"],
        div[data-name="Labeling"] > div[data-name="Header"],
        div[data-name="Labeling"] > div[data-name="Dropdown"],
        div[data-name="Llm"] > div[data-name="Header"],
        div[data-name="Llm"] > div[data-name="Dropdown"],
        div[data-name="Pricing"] > div[data-name="Header"],
        div[data-name="Pricing"] > div[data-name="Dropdown"] {
          display: none !important;
        }
        
        /* Ensure original footer isn't showing since we have a global one */
        div[data-name="Landing Page"] > div[data-name="Footer"],
        div[data-name="Labeling"] > div[data-name="Footer"],
        div[data-name="Llm"] > div[data-name="Footer"],
        div[data-name="Pricing"] > div[data-name="Footer"] {
          display: none !important;
        }
      `}</style>

      {/* Main Content Area */}
      <div className="relative w-full overflow-hidden flex-1 flex flex-col">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "landing", Component: Home },
      { path: "labeling", Component: Labeling },
      { path: "llm", Component: LLMIndustry },
      { path: "about", Component: AboutUs },
      { path: "teams", Component: Teams },
      { path: "contact", Component: Contact },
      { path: "autonomous-driving", Component: AutonomousDriving },
      { path: "healthcare-ai", Component: HealthcareAI },
      { path: "embodied-ai", Component: EmbodiedAI },
      { path: "speech-ai", Component: SpeechAI },
      { path: "platform-architecture", Component: PlatformArchitecture },
      { path: "data-collection", Component: DataCollection },
      { path: "data-annotation", Component: DataAnnotation },
      { path: "pricing", Component: Pricing },
      { path: "*", Component: Home }
    ]
  }
]);

