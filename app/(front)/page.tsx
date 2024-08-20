import DoctorsList from "@/components/DoctorsList";
import Brand from "@/components/Frontend/Brand";
import { Hero } from "@/components/Frontend/Hero";
import TabbedSection from "@/components/Frontend/TabbedSection";

export default function Home() {
  return (
    <section className="">
      <Hero />
      <Brand />
      <TabbedSection />
      <DoctorsList />
      <DoctorsList title="In-Person Doctor Visit" isInPerson={true} />
    </section>
  );
}
