import HeroSection from "./_components/hero-section";
import Footer from "./_components/footer";
import FeaturesSection from "./_components/features-section";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Navbar from "./_components/navbar";
export default async function Home() {
  const session = await auth();
  if (session) {
    return redirect("/dashboard");
  }
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <HeroSection />
      </section>
      <section>
        <FeaturesSection />
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
