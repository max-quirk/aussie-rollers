import { TeamMember } from "models/contentful/homepage/teamSectionContent"
import { TeamMemberCard } from "./TeamMemberCard"
import { keyGen } from "../../../utils/lists"

export function TeamListing({
  items
}: {
  items: TeamMember[]
}) {
  return (
    <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3 gap-x-20">
      {items?.map((item) => (
        <TeamMemberCard key={keyGen(item.name)} teamMember={item} />
      ))}
    </div>
  )
}
