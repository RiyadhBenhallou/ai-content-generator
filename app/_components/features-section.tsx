import {
  LightbulbIcon,
  ClockIcon,
  ChartBarIcon,
  PencilIcon,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to create content
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Contentify empowers you with AI-driven tools to streamline your
            content creation process and boost your productivity.
          </p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    name: "AI-Powered Creativity",
    description:
      "Our advanced AI algorithms generate unique and engaging content tailored to your specific needs and brand voice.",
    icon: LightbulbIcon,
  },
  {
    name: "Time-Saving Efficiency",
    description:
      "Create high-quality content in a fraction of the time it takes to write manually, freeing you up to focus on strategy and growth.",
    icon: ClockIcon,
  },
  {
    name: "SEO Optimization",
    description:
      "Every piece of content is crafted with SEO best practices in mind, helping you rank higher in search results and attract more organic traffic.",
    icon: ChartBarIcon,
  },
  {
    name: "Versatile Content Types",
    description:
      "From blog posts and social media updates to product descriptions and ad copy, Contentify handles a wide range of content needs.",
    icon: PencilIcon,
  },
];
