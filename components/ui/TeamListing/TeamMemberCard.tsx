import { TeamMember } from "models/contentful/homepage/teamSectionContent";
import { twMerge } from "tailwind-merge";

export function TeamMemberCard({
  teamMember
}: {
  teamMember: TeamMember
}) {
  const name = teamMember.name
  return (
    <div className={twMerge(
      "flex flex-col gap-4 text-center items-center",
      "border border-t-0 border-x-0 border-b-grey-300 last:border-b-0 pb-14 md:border-none md:pb-0"
    )}>
      <img 
        src={teamMember.headshotImage?.url}//fields.file.url} 
        alt={`${name} headshot`} 
        className="rounded-full"
        width={120}
      />
      <div className="mt-3">
        <div className="text-base font-medium">
          {name}
        </div>
        <div className="text-base text-primary-500">
          {teamMember.jobTitle}
        </div>
      </div>
      <p className="max-w-sm md:max-w-lg">
        {teamMember.content}
      </p>
    </div>
  )
}
