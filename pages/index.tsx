// pages/index.tsx

import { GetStaticProps } from 'next';
import { createClient } from 'contentful';
// import Testimonials, { TestimonialsProps } from '../components/Testimonials';
// import About, { AboutProps } from '../components/About';
import { HomePage, HomePageProps } from 'components/pages/home';
import { AppWrapper } from 'components/common';


export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  const resHomePage = await client.getEntries({ content_type: 'aussieRollersHomepage', locale });
  // const resTestimonials = await client.getEntries({ content_type: 'testimonial', locale });
  // const resAbout = await client.getEntries({ content_type: 'about', locale });

  return {
    props: {
      homepageContent: resHomePage.items[0].fields,
      // testimonialsContent: resTestimonials.items.map(item => item.fields),
      // aboutContent: resAbout.items[0].fields,
    },
    revalidate: 1,
  };
};

export default function LandingPage({ 
  homepageContent, 
  // testimonialsContent, 
  // aboutContent 
}: HomePageProps) {
  return (
    <AppWrapper>
      <HomePage homepageContent={homepageContent} />
    </AppWrapper>
  )
}

