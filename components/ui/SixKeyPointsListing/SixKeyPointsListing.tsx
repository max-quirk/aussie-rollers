import { KeyPointItem } from "models/ui/keyPointItem";
import { AdjustmentsVerticalIcon, LightBulbIcon, PlayIcon, ShieldCheckIcon, UserGroupIcon, UsersIcon } from '@heroicons/react/24/outline'
import { OneOfSixKeyPoints } from "./OneOfSixKeyPoints";
import { keyGen } from "utils/lists";

export function SixKeyPointsListing({
  items
}: { items: KeyPointItem[] }) {

  const iconProps = {
    className: "h-10 w-10"
  }
  {/* Icons for each section ordered LT->RB */}
  const iconsInOrder: JSX.Element[] = [
    <UsersIcon key={0} {...iconProps} />,
    <ShieldCheckIcon key={1} {...iconProps} />,
    <AdjustmentsVerticalIcon key={2} {...iconProps} />,
    <LightBulbIcon key={3} {...iconProps} />,
    <UserGroupIcon key={4} {...iconProps} />,
    <PlayIcon key={5} {...iconProps} />,
  ]

  return (
    <div className='grid grid-cols-2 md:grid-cols-3'>
      {items?.map((item, i) => (
        <OneOfSixKeyPoints
          key={keyGen(item.name)}
          item={item}
          index={i}
          icon={iconsInOrder[i]}
        />
      ))}
    </div>
  )
}
