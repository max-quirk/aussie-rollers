export interface Faq {
  question: string
  answer: string
}

export interface FaqSectionContent {
  faqSectionTitle: string
  faqs: Faq[]
}
