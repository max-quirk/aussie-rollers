import { SITE_PADDING_X } from "components/common"
import { twMerge } from "tailwind-merge"
import { HomePageSectionHeader } from "./HomePageSectionHeader"

type HomePageSectionProps = {
  className?: string,
  title?: string | JSX.Element,
  subtitle?: string | JSX.Element,
}

export function HomePageSection({ 
  children, 
  className,
  title,
  subtitle 
}: React.PropsWithChildren<HomePageSectionProps>) {
  return (
    <section className={twMerge(
      'odd:bg-white even:bg-gray-100 py-20 flex flex-col justify-center items-center', 
      SITE_PADDING_X,
      className
    )}>
      {title ? (
        <HomePageSectionHeader
          title={title}
          subtitle={subtitle}
        />
      ): null}
      {children}
    </section>
  )
}
