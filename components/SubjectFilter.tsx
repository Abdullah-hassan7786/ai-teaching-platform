'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"; // ✅ use from shadcn or your design system
import { subjects } from "@/constants";

const SubjectFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('subject') || '';

  const [subject, setSubject] = useState(query);

  useEffect(() => {
    let newUrl = "";
    if (subject === "all") {
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["subject"],
      });
    } else {
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "subject",
        value: subject,
      });
    }

    router.push(newUrl, { scroll: false });
  }, [subject]);

  return (
    <Select value={subject} onValueChange={setSubject}>
      <SelectTrigger className="input capitalize">
        <SelectValue placeholder="Select Subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all" className="capitalize">
          All Subjects
        </SelectItem>
        {subjects.map((item) => (
          <SelectItem key={item} value={item} className="capitalize">
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;
