import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-8 md:pb-12 lg:pb-12 xl:pb-16">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Create content at</span>{" "}
                <span className="block text-blue-600 xl:inline">
                  superhuman speed
                </span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Harness the power of AI to generate high-quality, engaging
                content in seconds. Say goodbye to writer's block and hello to
                unlimited creativity.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    <Link href="/login">Get started</Link>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  >
                    <Link href="#">Live demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </main>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <CheckCircle
                        className="absolute h-6 w-6 text-green-500"
                        aria-hidden="true"
                      />
                      <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-9 text-base text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-50 -z-10"></div>
    </div>
  );
}

const features = [
  {
    name: "10x Faster Content Creation",
    description:
      "Generate months worth of content in just hours, freeing up your time for strategy and creativity.",
  },
  {
    name: "SEO Optimized",
    description:
      "Our AI understands SEO best practices, ensuring your content ranks high on search engines.",
  },
  {
    name: "Customizable Outputs",
    description:
      "Tailor the AI to your brand voice and style for consistent, on-brand content every time.",
  },
];
