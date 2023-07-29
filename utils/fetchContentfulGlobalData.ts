import { DUMMY_GLOBAL_CONTENT } from 'constants/DUMMY_DATA';
import { projectSlug } from 'constants/project'
import { GlobalContent } from 'models/contentful/globalContent';

export async function fetchContentfulGlobalData(): Promise<GlobalContent> {
  return DUMMY_GLOBAL_CONTENT
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/contentful?projectSlug=${projectSlug}&contentType=globalContent&locale=en-US`
  const res = await fetch(url);
  const data = await res.json();
  return data.items?.[0]?.fields || null;
}
