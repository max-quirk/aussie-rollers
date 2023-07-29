import { Button } from "antd"
import { SITE_PADDING_X } from "components/common"
import { SiteLogo } from "components/ui/SiteLogo"
import { SpacedSiteTitle } from "components/ui/SpacedSiteTitle"
import { useContentful } from "contexts/contentful/ContentfulContext"
import { twMerge } from "tailwind-merge"
import { SocialIcon } from "react-social-icons"

export function Header() {
  const { globalContent } = useContentful()
  const socialIconProps = {
    className: 'h-7 w-7 bg-transparent'
  }
  return (
    <div className={twMerge('w-full flex justify-between py-5 bg-white', SITE_PADDING_X)}>
      <div className="flex items-center gap-3">
        <SiteLogo />
        <SpacedSiteTitle />
      </div>
      <div className="flex items-center gap-3">
        <SocialIcon url={globalContent.instagramUrl} {...socialIconProps} />
        <SocialIcon url={`mailto:${globalContent.contactEmail}`} {...socialIconProps} />
        <Button
          type="primary"
          href="#contactForm" // TODO: make work
          className="ml-4"
        >
          {globalContent.navCtaText}
        </Button> 
      </div>
    </div>
  )
}
