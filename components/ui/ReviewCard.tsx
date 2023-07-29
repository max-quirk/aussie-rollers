import { Review } from "models/ui/review";
import { twMerge } from "tailwind-merge";
import { FiveStars } from "./FiveStars";

export function ReviewCard({
  review,
  className
}: {
  review: Review,
  className?: string
}) {
  return (
    <div className={twMerge('flex flex-col gap-6 text-left', className)}>
      <FiveStars />
      <div className='font-medium text-lg'>
        {review.title}
      </div>
      <div>
        <div className='text-sm mb-3'>
          "{review.content}"
        </div>
        <div className='flex items-center gap-4 justify-start'>
          {/* <img src={review.headshotUrl} alt={review.name} /> */}
          <span className="font-medium">{review.name}</span>
        </div>
      </div>
    </div>
  )
}
