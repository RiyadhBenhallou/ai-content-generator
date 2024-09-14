"use client";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

export default function CopyToClipboard({ text }: { text: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleCopy}
      className="copy-button"
      data-output={text}
    >
      <Copy className="h-4 w-4 mr-2" />
      Copy
    </Button>
  );
}
