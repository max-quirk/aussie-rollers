import { useContentful } from "contexts/contentful/ContentfulContext";
import { HomePageSection } from "./HomePageSection";
import { ReviewCard } from "components/ui/ReviewCard";
import { twMerge } from "tailwind-merge";
import { SimpleContactForm } from "components/ui/SimpleContactForm";

export function ContactSection() {
  const { pageSpecificContent: homepageContent } = useContentful()
  const colPadding = `py-20 px-20`

  const contactSectionTitlesClasses = 'text-5xl font-medium font-title text-center md:text-left'

  return (
    <HomePageSection className='px-0 py-0 md:flex-row'>
      <div className="grid grid-cols-1 md:grid-cols-2">
      {/* Black (Left) side of Contact section */}
      <div className={twMerge(
          'w-full bg-gray-900 text-white h-full flex flex-col gap-10', 
          'items-center justify-around',
          colPadding,
      )}>
        <div className={contactSectionTitlesClasses}>
          {homepageContent.contactSectionLeftTitle}
        </div>
        {/* Contact section image */}
        <img 
          src={homepageContent.contactSectionImage?.url}//fields.file.url} 
          alt="Aussie Rollers community" 
          width={500}
        />
        <div>
          <ReviewCard review={homepageContent.contactSectionReview} />
        </div>
      </div>
      {/* Right side of Contact section */}
      <div className={twMerge(
        'w-full h-full flex flex-col gap-5',
        colPadding
      )}>
        <div className='flex flex-col gap-5 max-w-md'>
          <div className={contactSectionTitlesClasses}>
            {homepageContent.contactSectionRightTitle}
          </div>
          <p className="text-base mb-4">
            {homepageContent.contactSectionSubtitle}
          </p>
          <SimpleContactForm />
        </div>
      </div>
      </div>
    </HomePageSection>
  )
}
