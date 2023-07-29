import Image from "next/image"
import fiveStars from "/public/assets/images/stars.webp"
export function FiveStars() {
  return (
    <Image src={fiveStars} alt="5-star rating" width={120} />
  )
}
