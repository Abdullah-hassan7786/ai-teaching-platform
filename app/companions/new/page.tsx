import React from 'react'
import CompanionForm from '@/components/CompanionForm'
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
//import { newCompanionPermissions } from '@/lib/actions/companion.actions';
import Image from 'next/image';
import Link from 'next/link';
const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect('/sign-in');
  }
  //const canCreate = await newCompanionPermissions();
  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      <article className="w-full gap-4 flex flex-col">
            <h1>Companion Builder</h1>
            <CompanionForm />
          </article>
      {/* {
        canCreate ? (
          <article className="w-full gap-4 flex flex-col">
            <h1>Companion Builder</h1>
            <CompanionForm />
          </article>
        ) :
          <article className='companion-limit'>
            <Image src='/images/limit.svg' alt='reached limit' height={230} width={360} />
            <div className='cta-badge'>
              Upgrade your plan

            </div>
            <h1>You have reached limit</h1>
            <p>Ypu have reached your companion limit. Upgrade to create more companion and get features</p>
            <Link className='bt-primary w-full justify-center ' href="/subscription">
              Upgrade My Plan
            </Link>
          </article>
      } */}
    </main>
  )
}

export default NewCompanion