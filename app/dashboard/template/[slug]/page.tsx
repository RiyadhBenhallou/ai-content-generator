"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { chatSession } from "@/lib/ai-model";
import { aiTemplates, TemplateType } from "@/lib/utils";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy, Loader2 } from "lucide-react";
import { useEffect, useRef, useState, useTransition } from "react";
import { useCreditsUsage } from "../../providers";
import { saveOutputAction } from "./actions";

export default function TemplatePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const { usedCredits, setUsedCredits } = useCreditsUsage();
  const [template, setTemplate] = useState<TemplateType | null>(null);
  const [output, setOutput] = useState("");
  const [isLoading, startTransition] = useTransition();
  const editorRef = useRef<Editor>(null);
  const { toast } = useToast();

  useEffect(() => {
    const foundTemplate = aiTemplates.find((t) => t.slug === slug);
    setTemplate(foundTemplate || null);
  }, [slug]);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().setMarkdown(output);
    }
  }, [output]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!template) return;

    const formData = new FormData(event.currentTarget);
    const prompt = template.form
      .map((field) => `${field.label}: ${formData.get(field.name)}`)
      .join(",");
    const fullPrompt = `${template.prompt}\n\n${prompt}`;
    console.log("Full prompt:", fullPrompt);

    if (usedCredits !== null && usedCredits >= 10000) {
      toast({
        description: "You have used all your credits. Please buy more credits.",
      });
      return;
    }

    startTransition(async () => {
      try {
        const result = await chatSession.sendMessage(fullPrompt);
        const response = result.response;
        const text = response.text();
        setOutput(text);
        await saveOutputAction(template.name, prompt, text);

        const wordCount = text.split(/\s+/).length;
        setUsedCredits((prevCredits: number | null) =>
          prevCredits !== null ? prevCredits + wordCount : wordCount
        );
      } catch (error) {
        console.error("Error generating content:", error);
        setOutput("An error occurred while generating content.");
      }
    });
  };

  const handleCopy = () => {
    const content = editorRef?.current?.getInstance().getMarkdown();
    if (content) {
      navigator.clipboard.writeText(content).then(() => {
        console.log("Content copied to clipboard");
        toast({
          description: "The text has been copied to your clipboard.",
        });
      });
    }
  };

  if (!template) {
    return <div>Template not found</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-slate-100 min-h-screen">
      <div className="col-span-2">
        <div className="p-4 m-4 bg-white rounded-lg shadow">
          <template.icon className="w-10 h-10 mb-4" />
          <h2 className="text-2xl font-bold mb-4">{template.name}</h2>
          <p className="font-light text-gray-600 text-xs">
            {template.description}
          </p>
          <form className="space-y-4 mt-8" onSubmit={handleSubmit}>
            {template.form.map((field, index) => (
              <div key={index} className="flex flex-col">
                <label className="mb-1 font-bold text-sm">{field.label}</label>
                {field.type === "text" && (
                  <Input
                    type="text"
                    id={field.name}
                    name={field.name}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="p-2 border rounded"
                  />
                )}
                {field.type === "textarea" && (
                  <Textarea
                    id={field.name}
                    name={field.name}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="p-2 border rounded"
                  />
                )}
              </div>
            ))}
            <Button
              type="submit"
              className="px-4 py-2 flex gap-2 justify-center bg-blue-600 text-white rounded hover:bg-blue-700 w-full"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="animate-spin" />}
              Generate
            </Button>
          </form>
        </div>
      </div>
      <div className="p-5 col-span-3">
        <div className="bg-white self-start">
          <div className="flex justify-between items-center p-2">
            Your Result:
            <Button
              size={"icon"}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700"
              onClick={handleCopy}
            >
              <Copy size={14} />
            </Button>
          </div>
          <Editor
            ref={editorRef}
            initialValue={""}
            height="600px"
            initialEditType="markdown"
            useCommandShortcut={true}
          />
        </div>
      </div>
    </div>
  );
}
