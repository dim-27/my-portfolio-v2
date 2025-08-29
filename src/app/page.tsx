"use client";
import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Services from "@/components/home/services";

export default function Home() {
  return (
    <main className="p-4 w-full bg-primary-background">
      <div className="max-w-7xl container mx-auto">
        <Hero/>
        <Services/>
        <Projects/>
      </div>
    </main>
  );
}
