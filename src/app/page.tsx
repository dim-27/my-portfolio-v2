"use client";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import Works from "@/components/home/works";

export default function Home() {
  return (
    <main className="p-4 w-full bg-primary-background">
      <div className="max-w-7xl container mx-auto">
        <Hero/>
        <Works/> 
        <Services/>
      </div>
    </main>
  );
}
