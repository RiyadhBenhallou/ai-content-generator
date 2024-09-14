"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { fetchUserActivity } from "../template/[slug]/actions";
import { useCreditsUsage } from "../providers";

export default function UsageTracker() {
  const { data: session } = useSession();
  console.log(session?.user?.id);

  // const [usedCredits, setUsedCredits] = useState<number | null>(null);
  const { usedCredits, setUsedCredits } = useCreditsUsage();
  const totalCredits = 10000;

  useEffect(() => {
    async function loadUserActivity() {
      if (session?.user?.id) {
        const userActivity = await fetchUserActivity(session.user.id);
        if (userActivity !== undefined) {
          setUsedCredits(userActivity);
        }
      }
    }
    loadUserActivity();
  }, [session?.user?.id]);

  const percentageUsed =
    usedCredits !== null ? (usedCredits / totalCredits) * 100 : 0;
  const isLoading = usedCredits === null;

  return (
    <div>
      <div className="p-4 bg-white border border-blue-600 rounded-lg shadow-sm w-full mt-8">
        <h3 className="text-sm font-medium text-gray-900 mb-2">Usage</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-500">
            {isLoading
              ? "Loading..."
              : `${usedCredits} / ${totalCredits} credits`}
          </span>
          <span className="text-xs font-medium text-blue-600">
            {isLoading ? "..." : `${percentageUsed.toFixed(0)}%`}
          </span>
        </div>
        <Progress value={percentageUsed} className="h-2" />
      </div>
      <Button className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700">
        Buy Credits
      </Button>
    </div>
  );
}
