import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TemplateType } from "@/lib/utils";
import Link from "next/link";

export default function TemplateCard({ template }: { template: TemplateType }) {
  return (
    <Card key={template.slug} className="hover:scale-105 transition-all">
      <Link href={`/dashboard/template/${template.slug}`}>
        <CardHeader>
          <CardTitle className="flex flex-col gap-6">
            <template.icon className="h-12 w-12 mb-2" />
            {template.name}
          </CardTitle>
          <CardDescription className="font-medium">
            {template.description}
          </CardDescription>
        </CardHeader>
      </Link>
    </Card>
  );
}
