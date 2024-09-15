"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { History, LogOut } from "lucide-react";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function ProfileAvatar({ user }: { user: User }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.image!} alt="@user" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56" align="end" forceMount>
        <div className="grid gap-4">
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
            {/* <Button
              variant="ghost"
              className="flex items-center justify-start gap-2"
              asChild
            >
              <Link href="/dashboard/settings">
                <Settings className="h-4 w-4" />
                Settings
              </Link>
            </Button> */}
            {/* <Button
              variant="ghost"
              className="flex items-center justify-start gap-2"
              asChild
            >
              <Link href="/dashboard/billing">
                <CreditCard className="h-4 w-4" />
                Billing
              </Link>
            </Button> */}
            <Button
              variant="ghost"
              className="flex items-center justify-start gap-2"
              asChild
            >
              <Link href="/dashboard/history">
                <History className="h-4 w-4" />
                History
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-4 border-t pt-4">
          <Button
            variant="ghost"
            className="flex w-full items-center justify-start gap-2"
            onClick={() => {
              signOut();
            }}
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
