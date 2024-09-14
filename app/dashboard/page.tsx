"use client";
import { aiTemplates } from "@/lib/utils";
import { useEffect, useState } from "react";

import TemplateCard from "./_components/template-card";
import { Search } from "lucide-react";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTemplates, setFilteredTemplates] = useState(aiTemplates);
  useEffect(() => {
    const filteredTemplates = aiTemplates.filter(
      (template) =>
        template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTemplates(filteredTemplates);
  }, [searchTerm]);

  return (
    <div className="p-4">
      <div className="bg-gradient-to-r from-blue-500 from-10% to-indigo-700 p-16 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          What would you like to create today?
        </h2>
        <p className="text-sm font-light text-gray-200 text-center mb-6">
          Choose from our wide range of AI-powered templates to streamline your
          content creation process.
        </p>
        <div className="flex items-center justify-center w-full text-white">
          <div className="relative w-2/3">
            <input
              type="text"
              placeholder="Search templates"
              className="mb-2 p-2 pl-10 rounded-md focus:outline-none w-full bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-75 border-white border-opacity-50 focus:border-white focus:ring-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 transform -translate-y-[13px] top-1/2 h-5 w-5 text-white opacity-75" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <TemplateCard key={template.slug} template={template} />
        ))}
      </div>
    </div>
  );
}
