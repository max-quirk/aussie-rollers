import { Image } from "../image"

export interface TeamMember {
  headshotImage?: Image // TODO: make compulsory
  name: string
  jobTitle: string
  content: string
}

export interface TeamSectionContent {
  teamSectionTitle: string
  teamSectionSubtitle: string
  team: TeamMember[]
}
