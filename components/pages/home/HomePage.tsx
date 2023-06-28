import NavLanguageSelector from "components/navigation/NavLanguageSelector";
import { Hero, HeroProps } from "./Hero";

export interface HomePageProps {
  homepageContent: HeroProps;
  // testimonialsContent: TestimonialsProps;
  // aboutContent: AboutProps;
}

export function HomePage({ 
  homepageContent, 
  // testimonialsContent, 
  // aboutContent 
}: HomePageProps) {
  return (
    <div>
      <NavLanguageSelector />
      <Hero {...homepageContent} />
      
      {/* <Testimonials content={testimonialsContent} />
      <About content={aboutContent} /> */}
    </div>
  );
};
