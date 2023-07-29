import { Button } from "antd"
import { SITE_PADDING_X } from "components/common"
import { SiteLogo } from "components/ui/SiteLogo"
import { SpacedSiteTitle } from "components/ui/SpacedSiteTitle"
import { useContentful } from "contexts/contentful/ContentfulContext"
import { twMerge } from "tailwind-merge"

export function Header() {
  const { globalContent: { navCtaText } } = useContentful()
  return (
    <div className={twMerge('w-full flex justify-between py-5 bg-white', SITE_PADDING_X)}>
      <div className="flex items-center gap-3">
        <SiteLogo />
        <SpacedSiteTitle />
      </div>
      {/* TODO: Social icons */}
      <Button
        type="primary"
        href="#contactForm" // TODO: make work
      >
        {navCtaText}
      </Button> 
    </div>
  )
}
