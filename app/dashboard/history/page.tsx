import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/db";
import { aiOutput } from "@/db/schema";
import { auth } from "@/lib/auth";
import { desc, eq } from "drizzle-orm";
import CopyToClipboard from "./_components/copy-to-clipboard";

export default async function History() {
  const session = await auth();
  if (!session) {
    return;
  }
  const userId = session.user?.id;
  const history = await db
    .select()
    .from(aiOutput)
    .where(eq(aiOutput.userId, userId!))
    .orderBy(desc(aiOutput.createdAt));
  return (
    <div className="container mx-auto py-10 px-5">
      <h1 className="text-2xl font-bold mb-4">History</h1>
      <p className="text-sm text-muted-foreground mb-6">
        This is where you can see your past outputs. Use the table below to view
        and copy your AI-generated content.
      </p>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Template Name</TableHead>
              <TableHead>AI Response</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total Words</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="">{item.templateName}</TableCell>
                <TableCell>{item.output.slice(0, 50)}...</TableCell>
                <TableCell>
                  {new Date(item.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell>{item.output.split(/\s+/).length}</TableCell>
                <TableCell>
                  <CopyToClipboard text={item.output} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
