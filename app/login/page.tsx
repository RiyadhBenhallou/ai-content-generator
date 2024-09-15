"use client";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2 relative h-64 md:h-auto">
            <Image
              src="https://i.pinimg.com/originals/1a/04/69/1a046940247ca498deffecad4b839fc8.jpg"
              alt="Login visual"
              layout="fill"
            />
          </div>

          {/* Login Section */}
          <div className="md:w-1/2 p-8 space-y-6">
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Welcome Back!
            </h2>
            <p className="text-center text-gray-600">Sign in to your account</p>

            <div className="space-y-4">
              <Button
                className="w-full flex items-center justify-center gap-2"
                variant="outline"
                onClick={() =>
                  signIn("github", {
                    redirect: true,
                    callbackUrl: "/dashboard",
                  })
                }
              >
                <Github />
                Sign in with GitHub
              </Button>
              <Button
                className="w-full flex items-center justify-center gap-2"
                variant="outline"
                onClick={() =>
                  signIn("google", {
                    redirect: true,
                    callbackUrl: "/dashboard",
                  })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                >
                  <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
                </svg>
                Sign in with Google
              </Button>
            </div>

            <div className="text-center text-sm text-gray-500 mt-4">
              <p>
                &copy; {new Date().getFullYear()} Contentify. All rights
                reserved.
              </p>
              <p className="mt-1">
                <a href="#" className="text-blue-500 hover:underline">
                  Terms of Service
                </a>
                {" | "}
                <a href="#" className="text-blue-500 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
