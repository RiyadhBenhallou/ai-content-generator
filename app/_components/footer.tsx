import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Bot,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Link href="/" target="_blank" className="flex items-center">
              <span className="sr-only">Verbosity AI</span>
              <Bot className="h-12 w-12 text-blue-600" />
              <span className="ml-3 text-xl font-bold text-gray-900">
                Verbosity AI
              </span>
            </Link>
            <p className="text-gray-500 text-base">
              Empowering creators with AI-driven content generation. Unleash
              your creativity and productivity with Verbosity AI.
            </p>
            <div className="flex space-x-6">
              <Link
                href="https://www.facebook.com/Riyadh.Benhallou/"
                target="_blank"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.instagram.com/riyadh.bnhl/"
                target="_blank"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://x.com/RiadhBenhallou"
                target="_blank"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="https://github.com/RiyadhBenhallou"
                target="_blank"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/riyadh-benhallou-8a9101291"
                target="_blank"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Solutions
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Blog Writing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Social Media
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Product Descriptions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      SEO Optimization
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      API Status
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Jobs
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Partners
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      Licensing
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Verbosity AI, Inc. All rights
            reserved.
          </p>
          <p className="text-base text-gray-400 xl:text-center">
            Lead developer of this website:{" "}
            <Link href="https://github.com/RiyadhBenhallou" target="_blank">
              Riyadh Benhallou
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
