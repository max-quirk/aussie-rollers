import { useContentful } from "contexts/contentful/ContentfulContext"
import { twMerge } from "tailwind-merge"

export function SpacedSiteTitle({
  className
}: {
  className?: string
}) {
  const { globalContent } = useContentful()
  return (
    <span className={twMerge(
      'uppercase font-title font-medium text-base tracking-wider',
      className
    )}>
      {globalContent.siteTitle}
    </span>
  )
}
