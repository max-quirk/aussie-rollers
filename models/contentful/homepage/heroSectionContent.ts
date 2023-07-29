import { Image } from "../image"
import { Review } from "../../ui/review"

export interface HeroSectionContent {
  heroTitle: string
  heroSubtitle: string
  heroCtaText: string
  heroReview: Review
  heroImage?: Image //TODO: make compulsory
}
