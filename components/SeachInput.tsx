'use client';

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import Image from 'next/image';
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";


const SeachInput = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('topic') || '';
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchQuery) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "topic",
                    value: searchQuery,
                });
                router.push(newUrl, { scroll: false });
            }
            else {
                if (pathname === '/cpmpanions') {
                    const newUrl = removeKeysFromUrlQuery(
                        {
                            params: searchParams.toString(),
                            keysToRemove: ["topic"],
                        }
                    );
                    router.push(newUrl, { scroll: false });
                }
            }

        } , 500)

    }, [searchQuery, router, searchParams, pathname]);
    return (
        <div className="relative border border-block rounded-lg items-center flex gap-2 px-2 py-1 h-fit">

            <Image src="/icons/search.svg" alt="search" height={15} width={15} />
            <input
                placeholder="Search Companion...."
                className="outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    )
}

export default SeachInput