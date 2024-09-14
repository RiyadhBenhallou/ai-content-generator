import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { auth, signIn, signOut } from "@/lib/auth";
import { Github } from "lucide-react";

export default async function Home() {
  const session = await auth();
  if (session) {
    return (
      <>
        <p>You are signed in as {session?.user?.name}</p>
        <form
          action={async () => {
            "use server";
            await signOut({ redirect: true, redirectTo: "/riyadh" });
          }}
        >
          <Button>Sign Out</Button>
        </form>
      </>
    );
  }
  return (
    <>
      <h1>hello world</h1>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <Button variant={"outline"}>
          <Github />
          SignIn
        </Button>
      </form>
    </>
  );
}
