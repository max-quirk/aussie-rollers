import { ContentfulContent, PageSpecificContent } from "models/contentful/globalContent";
import { createContext, useContext } from "react";

export type ContentfulContextProps = ContentfulContent & {
  setPageSpecificContent: React.Dispatch<React.SetStateAction<PageSpecificContent | null>>
}

export const ContentfulContext = createContext<ContentfulContextProps | undefined>(undefined);

export const useContentful = () => useContext(ContentfulContext);
