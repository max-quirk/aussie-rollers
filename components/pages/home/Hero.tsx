import { useContentful } from 'contexts/contentful/ContentfulContext';
import { HomePageSection } from './HomePageSection';
import { ReviewCard } from 'components/ui/ReviewCard';
import { Button } from 'antd';

export function Hero() {
  const { pageSpecificContent: homepageContent } = useContentful()
  const heroImage = (
    <img 
      src={homepageContent.heroImage?.url}//fields?.file?.url} 
      alt={homepageContent.heroTitle} 
      width={400}
      className="rounded-md"
    />
  )
  return (
    <HomePageSection className='relative'>
      <div className="max-w-5xl z-10">
        <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-20 top-0 left-0'>
          {/* First column: Title, subtitle, review */}
          <div className='flex flex-col gap-6 max-w-md text-center md:text-left items-center md:items-start'>
            <div className='block md:hidden'>
              {heroImage}
            </div>
            <h1 className="text-5xl font-bold font-title max-w-md">{homepageContent.heroTitle}</h1>
            <p className="text-base">{homepageContent.heroSubtitle}</p>
            <div className="mb-10">
              <Button
                type='primary'
                href="#contactForm"
                size="large"
              >
                {homepageContent.heroCtaText}
              </Button>
            </div>
            <ReviewCard review={homepageContent.heroReview} />
          </div>
          {/* Second column: Hero image */}
          <div className='hidden md:block'>
            {heroImage}
          </div>
        </div>
      </div>
      <div className='absolute right-0 bottom-0'>
        <img 
          src="/assets/images/homepage-background.webp" 
          alt="Homepage background grid"
          width={900}
        />
      </div>
    </HomePageSection>
  );
};
