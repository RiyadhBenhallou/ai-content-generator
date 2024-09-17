"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { History, LayoutDashboard, LogOut } from "lucide-react";
import { User } from "next-auth";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { fetchUserActivity } from "../template/[slug]/actions";

export default function Component({ user }: { user: User }) {
  const { data: session } = useSession();
  const [usedCredits, setUsedCredits] = useState<number | null>(null);
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
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.image as string} alt="@user" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-60 p-0" align="end">
        <div className="grid gap-4 p-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.image!} alt="@user" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">{user.name}</p>
              <p className="text-xs leading-none text-muted-foreground">
                {user.email}
              </p>
            </div>
          </div>
          <div className="grid gap-2">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link href="/dashboard">
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              asChild
            >
              <Link href="/dashboard/history">
                <History className="h-4 w-4" />
                History
              </Link>
            </Button>
          </div>
        </div>
        <div className="border-t p-4">
          <div className="mb-4">
            <h3 className="text-sm font-medium mb-2">Usage</h3>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-muted-foreground">
                {isLoading
                  ? "Loading..."
                  : `${usedCredits} / ${totalCredits} credits`}
              </span>
              <span className="text-xs font-medium text-primary">
                {isLoading ? "..." : `${percentageUsed.toFixed(0)}%`}
              </span>
            </div>
            <Progress value={percentageUsed} className="h-2" />
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start gap-2"
            onClick={() => signOut()}
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
