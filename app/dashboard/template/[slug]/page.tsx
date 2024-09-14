"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/lib/ai-model";
import { aiTemplates } from "@/lib/utils";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Copy, Loader2 } from "lucide-react";
import { useEffect, useRef, useState, useTransition } from "react";
import { fetchUserActivity, saveOutputAction } from "./actions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function TemplatePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const router = useRouter();
  const template = aiTemplates.find((t) => t.slug === slug);
  if (!template) {
    return <div>Template not found</div>;
  }

  const [output, setOutput] = useState("");
  const { data: session } = useSession();

  const [isLoading, startTransition] = useTransition();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const prompt = template.form
      .map((field) => `${field.label}: ${formData.get(field.name)}`)
      .join(",");
    // Combine the template's prompt with the user's input
    const fullPrompt = `${template.prompt}\n\n${prompt}`;
    console.log("Full prompt:", fullPrompt);
    const userActivity = await fetchUserActivity(session?.user?.id!);
    if (userActivity >= 10000) {
      router.push("/dashboard/billing");
      return;
    }

    startTransition(async () => {
      try {
        const result = await chatSession.sendMessage(fullPrompt);
        const response = await result.response;
        const text = response.text();
        setOutput(text);
        await saveOutputAction(template.name, prompt, text);
      } catch (error) {
        console.error("Error generating content:", error);
        setOutput("An error occurred while generating content.");
      }
    });
  };

  const editorRef = useRef<Editor>(null);

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
    const editor = editorRef.current?.getInstance();
    if (editor) {
      editor.setMarkdown(output);
    }
  }, [output]);

  console.log(output);

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
        {/* <OutputSection content={output} /> */}
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
            // previewStyle="vertical"
            height="600px"
            initialEditType="markdown"
            useCommandShortcut={true}
          />
        </div>
      </div>
    </div>
  );
}
