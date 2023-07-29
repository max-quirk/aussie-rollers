import { SITE_PADDING_X } from "components/common";
import { SiteLogo } from "components/ui/SiteLogo";
import { SpacedSiteTitle } from "components/ui/SpacedSiteTitle";
import { useContentful } from "contexts/contentful/ContentfulContext";

export function Footer() {
  const { globalContent: { footerCopywriteText } } = useContentful()
  return (
    <footer className={`h-60 bg-gray-100 gap-10 px-20 flex justify-between w-full items-center py-16 ${SITE_PADDING_X}`}>
      <div className='flex gap-4 items-center'>
        <SiteLogo height={60} width={60} />
        <SpacedSiteTitle className="text-xl" />
      </div>
      <div>
        <img 
          src="/assets/images/should-be-contentful/hyperfly-logo.webp" 
          alt="Hyperfly logo"
          width={200}
        />
      </div>
      <div>
        {footerCopywriteText}
      </div>
    </footer>
  )
}
