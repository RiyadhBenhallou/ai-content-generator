import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Bot,
  Code,
  FileText,
  Image,
  MessageSquare,
  Music,
  Video,
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const aiTemplates = [
  {
    name: "Blog Title Generator",
    description: "Generate catchy and SEO-friendly blog titles",
    icon: FileText,
    prompt: "Generate 5 catchy and SEO-friendly blog titles about {topic}",
    form: [
      {
        label: "Topic",
        placeholder: "Enter the main topic of your blog post",
        required: true,
        name: "topic",
        type: "text",
      },
    ],
    slug: "blog-title-generator",
  },
  {
    name: "Code Generator",
    description: "Generate code snippets in various programming languages",
    icon: Code,
    prompt: "Write a {language} function that {functionality}",
    form: [
      {
        label: "Programming Language",
        placeholder: "e.g., JavaScript, Python, Java",
        required: true,
        name: "language",
        type: "text",
      },
      {
        label: "Functionality",
        placeholder: "Describe what the function should do",
        required: true,
        name: "functionality",
        type: "textarea",
      },
    ],
    slug: "code-generator",
  },
  {
    name: "Image Prompt Generator",
    description: "Create detailed prompts for AI image generation",
    icon: Image,
    prompt:
      "Generate a detailed image prompt for {subject} in the style of {style}",
    form: [
      {
        label: "Subject",
        placeholder: "What should the image be about?",
        required: true,
        name: "subject",
        type: "text",
      },
      {
        label: "Style",
        placeholder: "e.g., Photorealistic, Cartoon, Oil Painting",
        required: true,
        name: "style",
        type: "text",
      },
    ],
    slug: "image-prompt-generator",
  },
  {
    name: "Chatbot Response Generator",
    description: "Create human-like responses for chatbots",
    icon: MessageSquare,
    prompt:
      "Generate a friendly and helpful chatbot response to: {userMessage}",
    form: [
      {
        label: "User Message",
        placeholder: "Enter the user's message or question",
        required: true,
        name: "userMessage",
        type: "textarea",
      },
    ],
    slug: "chatbot-response-generator",
  },
  {
    name: "Music Lyrics Generator",
    description: "Generate creative song lyrics",
    icon: Music,
    prompt: "Write lyrics for a {genre} song about {theme}",
    form: [
      {
        label: "Genre",
        placeholder: "e.g., Pop, Rock, Hip-Hop",
        required: true,
        name: "genre",
        type: "text",
      },
      {
        label: "Theme",
        placeholder: "What should the song be about?",
        required: true,
        name: "theme",
        type: "text",
      },
    ],
    slug: "music-lyrics-generator",
  },
  {
    name: "Video Script Generator",
    description: "Create scripts for short-form videos",
    icon: Video,
    prompt: "Write a script for a {duration} {videoType} video about {topic}",
    form: [
      {
        label: "Duration",
        placeholder: "e.g., 30-second, 1-minute, 5-minute",
        required: true,
        name: "duration",
        type: "text",
      },
      {
        label: "Video Type",
        placeholder: "e.g., Explainer, Tutorial, Vlog",
        required: true,
        name: "videoType",
        type: "text",
      },
      {
        label: "Topic",
        placeholder: "What is the video about?",
        required: true,
        name: "topic",
        type: "text",
      },
    ],
    slug: "video-script-generator",
  },
  {
    name: "AI Assistant Prompt",
    description: "Generate prompts for general AI assistance",
    icon: Bot,
    prompt: "You are an AI assistant. {task}",
    form: [
      {
        label: "Task",
        placeholder: "Describe the task or question for the AI",
        required: true,
        name: "task",
        type: "textarea",
      },
    ],
    slug: "ai-assistant-prompt",
  },
];

export type TemplateType = (typeof aiTemplates)[number];
