export function HomePageSectionHeader({
  title,
  subtitle
}: {
  title: string | JSX.Element,
  subtitle?: string | JSX.Element
}) { 
  return (
    <div className='flex flex-col gap-5 text-center pb-16 max-w-xl'>
      <div className="font-heading font-medium text-4xl">
        {title}
      </div>
      {subtitle ? (
        <p className="text-base">
          {subtitle}
        </p>
      ): null}
    </div>
  )
}
