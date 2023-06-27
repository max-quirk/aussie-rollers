// pages/index.tsx

import { GetStaticProps } from 'next';
import { createClient } from 'contentful';
// import Testimonials, { TestimonialsProps } from '../components/Testimonials';
// import About, { AboutProps } from '../components/About';
import { Hero, HeroProps } from '../components/hero';
import { LanguageButton } from '../components/languageButton';

interface HomePageProps {
  homepageContent: HeroProps;
  // testimonialsContent: TestimonialsProps;
  // aboutContent: AboutProps;
}

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

export default function HomePage({ 
  homepageContent, 
  // testimonialsContent, 
  // aboutContent 
}: HomePageProps) {
  console.log('hello!')
  return (
    <div>
      <LanguageButton />
      <Hero {...homepageContent} />
      
      {/* <Testimonials content={testimonialsContent} />
      <About content={aboutContent} /> */}
    </div>
  );
};
