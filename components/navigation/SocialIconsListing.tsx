import { useContentful } from "contexts/contentful/ContentfulContext"
import { SocialIcon } from "react-social-icons"
import { twMerge } from "tailwind-merge"

export function SocialIconsListing({
  className
}: {
  className?: string
}) {
  const { globalContent } = useContentful()
  const socialIconProps = {
    className: twMerge('h-6 w-6 md:h-7 md:w-7 ', className),
    bgColor: "indigo"
  }
  return (
    <div className='flex gap-2 md:gap-3'>
      <SocialIcon url={globalContent.instagramUrl} {...socialIconProps} />
      <SocialIcon url={`mailto:${globalContent.contactEmail}`} {...socialIconProps} />
    </div>
  )
}
