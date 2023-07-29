import { useContentful } from "contexts/contentful/ContentfulContext"
import { HomePageSection } from "./HomePageSection"
import { ContentWrapper } from "components/common/ContentWrapper"
import { TeamListing } from "components/ui/TeamListing"

export function TeamSection() {
  const { pageSpecificContent: homePageContent } = useContentful()
  return (
    <HomePageSection
      title={homePageContent.teamSectionTitle}
      subtitle={homePageContent.teamSectionSubtitle}
    >
      <ContentWrapper>
        <TeamListing items={homePageContent.team} />
      </ContentWrapper>
    </HomePageSection>
  )
}
