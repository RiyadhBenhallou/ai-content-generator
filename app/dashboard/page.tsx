"use client";
import { aiTemplates } from "@/lib/utils";
import { useEffect, useState } from "react";

import TemplateCard from "./_components/template-card";

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
    <div className="">
      <div className="bg-gradient-to-r from-blue-500 from-10% to-indigo-700 p-16 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          What would you like to create today?
        </h2>
        <div className="flex items-center justify-center w-full text-white">
          <input
            type="text"
            placeholder="Search templates"
            className="mb-2 p-2 rounded-md focus:outline-none w-2/3 bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-75 border-white border-opacity-50 focus:border-white focus:ring-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
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
