import { getCompnion } from '@/lib/actions/companion.actions';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { subjectsColors } from '@/constants';
import Image from 'next/image';
import React from 'react'
import CompanionComponent from '@/components/CompanionComponent';
interface CompanionSesionPageProps {
  // params: Promise<{ id: string }>;
    params: { id: string }; // ✅ Correct

  //params
  //search params /url ?key =value
}
const CompanionSession = async ({ params }: CompanionSesionPageProps) => {
  const { id } = await params;
  const companion = await getCompnion(id);

  const user = await currentUser();
  
    const { name, subject, title, topic, duration } = companion;
  const getSubjectColor = (subject: string) => {
      return subjectsColors[subject as keyof typeof subjectsColors] || "#FFFFFF";
    };

  if (!user) {
    redirect('/sign-in');
  }
  if (!companion) redirect('/companion')

  return (
    <main>
            <article className="flex rounded-border justify-between p-6 max-md:flex-col">
                <div className="flex items-center gap-2">
                    <div className="size-[72px] flex items-center justify-center rounded-lg max-md:hidden" style={{ backgroundColor: getSubjectColor(subject)}}>
                        <Image src={`/icons/${subject}.svg`} alt={subject} width={35} height={35} />
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-2xl">
                                {name}
                            </p>
                            <div className="subject-badge max-sm:hidden">
                                {subject}
                            </div>
                        </div>
                        <p className="text-lg">{topic}</p>
                    </div>
                </div>
                <div className="items-start text-2xl max-md:hidden">
                    {duration} minutes
                </div>
            </article>

            <CompanionComponent
                {...companion}
                companionId={id}
                userName={user.firstName!}
                userImage={user.imageUrl!}
            />
        </main>
  )
}

export default CompanionSession