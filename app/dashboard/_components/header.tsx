import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import ProfileAvatar from "./profile-avatar";
import { auth } from "@/lib/auth";

export default async function Header() {
  const session = await auth();
  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between">
            <Badge
              variant="secondary"
              className="text-primary bg-blue-600 hover:bg-blue-800 transition-colors text-white"
            >
              Memberships are not available yet.
            </Badge>
            <ProfileAvatar user={session?.user!} />
          </div>
        </div>
      </div>
    </nav>
  );
}
