import { HomePage } from 'components/pages/home';
import { useContentful } from '../contexts/contentful/ContentfulContext';
import { PageSpecificContent } from '../models/contentful/globalContent';
import { useEffect } from 'react';
import { fetchContentfulPageData } from '../utils/fetchContentfulPageData';

export async function getServerSideProps() {
  const homepageContent = await fetchContentfulPageData('homepage')
  return {
    props: {
      homepageContent,
    },
  };
}

export default function LandingPage({ homepageContent }: { homepageContent: PageSpecificContent | null }) {
  const { setPageSpecificContent, pageSpecificContent } = useContentful();

  useEffect(() => {
    setPageSpecificContent(homepageContent);
  }, [homepageContent, setPageSpecificContent]);
  if (!pageSpecificContent) return <div>404</div>

  return <HomePage />
}
