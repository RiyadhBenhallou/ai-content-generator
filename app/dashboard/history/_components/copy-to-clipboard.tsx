"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Copy } from "lucide-react";

export default function CopyToClipboard({ text }: { text: string }) {
  const { toast } = useToast();
  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({
          description: "The text has been copied to your clipboard.",
        });
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        toast({
          title: "Error",
          description: "Failed to copy text to clipboard.",
          variant: "destructive",
        });
      });
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
