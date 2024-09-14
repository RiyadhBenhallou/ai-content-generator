"use server";

import { db } from "@/db";
import { aiOutput } from "@/db/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";

export async function saveOutputAction(
  templateName: string,
  formData: string,
  output: string
) {
  const session = await auth();
  if (!session) {
    return;
  }
  const userId = session.user?.id;
  await db.insert(aiOutput).values({
    userId: userId!,
    formData,
    templateName,
    output,
  });
}

export async function fetchUserActivity(userId: string) {
  const userActivity = await db.query.aiOutput.findMany({
    where: eq(aiOutput.userId, userId),
  });
  const wordCount = userActivity.reduce((acc, curr) => {
    return acc + curr.output.split(/\s+/).length;
  }, 0);
  console.log(wordCount);
  return wordCount;
}
