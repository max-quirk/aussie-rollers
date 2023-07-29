import { useContentful } from "contexts/contentful/ContentfulContext";
import { HomePageSection } from "./HomePageSection";
import { FaqListing } from "components/ui/FaqListing";

export function FaqSection() {
  const { pageSpecificContent: homePageContent } = useContentful()
  return (
    <HomePageSection 
      title={homePageContent.faqSectionTitle}
    >
      <FaqListing />
    </HomePageSection>
  )
}
