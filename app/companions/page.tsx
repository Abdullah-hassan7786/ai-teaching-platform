import {getAllCompanions} from "@/lib/actions/companion.actions";
import CompanionCard from "@/components/CompanionCard";
import { subjectsColors } from "@/constants";
import SeachInput from "@/components/SeachInput";
import SubjectFilter from "@/components/SubjectFilter";
const CompanionsLibarary = async({searchParams} :SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : '';
  const topic = filters.topic ? filters.topic : '';

  const companions = await getAllCompanions({subject, topic});
    const getSubjectColor = (subject: string) => {
        return subjectsColors[subject as keyof typeof subjectsColors] || "#FFFFFF";
    };

  return (
      <main>
        <section className="flex justify-between gap-4 max-sm:flex-col">
          <h1>Companion Library</h1>
          <div className="flex gap-4">
            <SeachInput />
            <SubjectFilter />
            
          </div>

        </section>
        <section className="companions-grid">
            {  companions.map((companion)=>(
            <CompanionCard
                key = {companion.id}
                {...companion}

                color={getSubjectColor(companion.subject)}
                />
          ))}
        </section>
      </main>
  )
}

export default CompanionsLibarary