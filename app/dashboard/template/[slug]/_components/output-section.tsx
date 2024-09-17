"use client";
import { Button } from "@/components/ui/button";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function OutputSection({ content }: { content: string }) {
  const editorRef = useRef<Editor>(null);

  const [output, setOutput] = useState(content);
  const handleCopy = () => {
    if (editorRef.current) {
      const content = editorRef.current.getInstance().getMarkdown();
      navigator.clipboard.writeText(content).then(() => {
        console.log("Content copied to clipboard");
        // You can add a toast notification here if desired
      });
    }
  };
  useEffect(() => {
    setOutput(content);
  }, [content]);
  console.log(output);
  return (
    <div className="bg-white self-start">
      <div className="flex justify-between items-center p-2">
        Your Result:
        <Button
          size={"icon"}
          className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700"
          onClick={handleCopy}
        >
          <Copy />
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue=""
        // previewStyle="vertical"
        height="600px"
        initialEditType="markdown"
        useCommandShortcut={true}
      />
    </div>
  );
}
