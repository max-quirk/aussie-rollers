import { SITE_PADDING_X } from "components/common";
import { SiteLogo } from "components/ui/SiteLogo";
import { SpacedSiteTitle } from "components/ui/SpacedSiteTitle";
import { useContentful } from "contexts/contentful/ContentfulContext";
import { SocialIconsListing } from "./SocialIconsListing";

export function Footer() {
  const { globalContent: { footerCopywriteText } } = useContentful()
  return (
    <footer className={`md:h-60 bg-gray-100 gap-10 px-20 flex flex-col md:flex-row justify-between w-full items-center py-16 ${SITE_PADDING_X}`}>
      <div className='flex gap-4 items-center'>
        <SiteLogo />
        <SpacedSiteTitle />
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-center">
        <div>
          <img 
            src="/assets/images/should-be-contentful/hyperfly-logo.webp" 
            alt="Hyperfly logo"
            width={200}
          />
        </div>
        <SocialIconsListing className="h-10 w-10 md:h-10 md:w-10 "/>
      </div>
      <div>
        {footerCopywriteText}
      </div>
    </footer>
  )
}
