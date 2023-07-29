import { DUMMY_HOMEPAGE_CONTENT } from 'constants/DUMMY_DATA';
import { projectSlug } from 'constants/project'
import { PageSpecificContent } from 'models/contentful/globalContent';

export async function fetchContentfulPageData(contentType: string): Promise<PageSpecificContent> {
  return DUMMY_HOMEPAGE_CONTENT
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/contentful?projectSlug=${projectSlug}&contentType=${contentType}&locale=en-US`
  );
  const data = await res.json();
  return data.items?.[0]?.fields || null;
}
