import { ContactSection } from "./ContactSection";
import { FaqSection } from "./FaqSection";
import { Hero } from "./Hero";
import { TeamSection } from "./TeamSection";
import { WhatIsItSection } from "./WhatIsItSection";

export function HomePage() {
  return (
    <>
      <Hero />
      <ContactSection /> 
      <WhatIsItSection />
      <TeamSection />
      <FaqSection />
    </>
  );
};
