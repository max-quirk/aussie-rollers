import { Image } from "../image"
import { Review } from "../../ui/review"

export interface ContactSectionContent {
  contactSectionLeftTitle: string
  contactSectionRightTitle: string
  contactSectionImage?: Image
  contactSectionReview: Review
  contactSectionSubtitle: string
  contactSectionButtonText: string
}
