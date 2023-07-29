import { Image } from "./image"

export interface HeaderContent {
  logo?: Image // TODO: make compulsory
  siteTitle: string
  instagramUrl: string
  contactEmail: string
  mobile: string
  navCtaText: string
}
