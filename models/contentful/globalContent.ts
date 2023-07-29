import { FooterContent } from "./footerContent";
import { HeaderContent } from "./headerContent";
import { HomepageContent } from "./homepage/homepageContent";

export type GlobalContent = HeaderContent & FooterContent

// Page-specific content fetched in the individual page components
export type PageSpecificContent = 
  HomepageContent | null
  // || AboutContent | null // (other pages go here)


export interface ContentfulContent {
  globalContent: GlobalContent;
  pageSpecificContent: PageSpecificContent;
}
