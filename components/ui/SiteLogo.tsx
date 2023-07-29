import { useContentful } from "contexts/contentful/ContentfulContext"

export function SiteLogo({
  height = 40,
  width = 40,
}: {
  height?: number
  width?: number
}) {
  const { globalContent } = useContentful()
  return (
    <img 
      src={globalContent.logo?.url}//?.fields?.file?.url} 
      alt={`${globalContent.siteTitle} logo`} 
      width={width} 
      height={height} 
    />
  )
}
