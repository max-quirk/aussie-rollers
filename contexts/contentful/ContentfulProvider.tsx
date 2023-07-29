import { ContentfulContext } from "./ContentfulContext";
import { GlobalContent, PageSpecificContent } from "models/contentful/globalContent";
import { useState } from "react";

export const ContentfulProvider: React.FC<React.PropsWithChildren<{ globalContent: GlobalContent, pageSpecificContent?: PageSpecificContent }>> = ({ children, globalContent, pageSpecificContent }) => {
  const [pageSpecificContentState, setPageSpecificContentState] = useState<PageSpecificContent | null>(pageSpecificContent);

  return (
    <ContentfulContext.Provider value={{ globalContent, pageSpecificContent: pageSpecificContentState, setPageSpecificContent: setPageSpecificContentState }}>
      {children}
    </ContentfulContext.Provider>
  );
};
