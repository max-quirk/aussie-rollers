import useMobile from "hooks/useMobile"
import { KeyPointItem } from "models/ui/keyPointItem"
import { twMerge } from "tailwind-merge"

export function OneOfSixKeyPoints({
  item,
  index,
  icon,
}: {
  item: KeyPointItem
  index: number
  icon: JSX.Element
}) {
  const isMobile = useMobile()

  // 2-col borders only inside grid
  const mobileBorderClasses = 'border-t-0 border-l-0 even:border-r-0'
  
  // 3-col borders only inside grid
  const itemBorderPosition = () => {
    switch (index) {
      case 0:
        return 'border-t-0 border-l-0'
      case 1:
        return 'border-t-0 border-x-0'
      case 2:
        return 'border-t-0 border-r-0'
      case 3:
        return 'border-y-0 border-l-0'
      case 4:
        return 'border-0'
      case 5:
        return 'border-y-0 border-r-0'
    }
  }

  return (
    <div 
      className={twMerge(
        'border border-gray-300 p-14 flex flex-col items-center justify-start gap-6 text-center',
        isMobile ? mobileBorderClasses : itemBorderPosition()
      )}
    >
      {icon}
      <div>
        <div className='text-lg font-medium mb-4'>
          {item.name}
        </div>
        <p className='text-gray-500'>
          {item.content}
        </p>
      </div>
    </div> 
  )
}
