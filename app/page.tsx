import React from 'react'
import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.actions'
import { CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL } from 'next/dist/shared/lib/constants'
import { getSubjectColor } from '@/lib/utils'

const Page = async() => {
  const companions = await getAllCompanions({limit : 3});
  const recentSessionsCompanions = await getRecentSessions(10);



  return (
    <main>
      <h1 className="text-2xl">Popular Companion</h1>
      <section className='home-section'>
        {companions.map((companion)=>(
            <CompanionCard
            key = {companion.id}
          {...companion}
          color={getSubjectColor(companion.subject)}
        />
        ))}
     
      
      </section>
      <section className='home-section'>
        <CompanionList
        title = "Recently  completeted sessions"
        companions = {recentSessionsCompanions}
        classNames="w-2/3 max-lg:w-full"
        />
        <CTA />

      </section>
    </main>
  )
}

export default Page