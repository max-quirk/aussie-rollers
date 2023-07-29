import { useContentful } from "contexts/contentful/ContentfulContext";
import { HomePageSection } from "./HomePageSection";
import { ContentWrapper } from "components/common/ContentWrapper";
import { SixKeyPointsListing } from "components/ui/SixKeyPointsListing";

export interface WhatSectionListItem {
  // icon: string 
  name: string
  content: string
}

export interface WhatSectionContent {
  whatSectionTitle: string
  whatSectionSubtitle: string
  whatSectionListItems: WhatSectionListItem[]
}

export function WhatIsItSection() {
  const { pageSpecificContent: homePageContent } = useContentful()
  return (
    <HomePageSection 
      title={homePageContent.whatSectionTitle}
      subtitle={homePageContent.whatSectionSubtitle}
    >
      <ContentWrapper>
        <SixKeyPointsListing items={homePageContent.whatSectionListItems} />
      </ContentWrapper>
    </HomePageSection>
  )
}
