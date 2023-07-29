import { ContactSectionContent } from "./contactSectionContent"
import { FaqSectionContent } from "./faqSectionContent"
import { HeroSectionContent } from "./heroSectionContent"
import { TeamSectionContent } from "./teamSectionContent"
import { WhatSectionContent } from "./whatSectionContent"

export type HomepageContent = HeroSectionContent &
  WhatSectionContent &
  TeamSectionContent &
  FaqSectionContent &
  ContactSectionContent

