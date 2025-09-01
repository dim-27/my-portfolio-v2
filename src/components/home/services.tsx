import { primaryFont } from "@/lib/font";
import { Button } from "../ui/button/button";
import Link from "next/link";

export default function Services() {
  return (
    <section className="mx-auto container py-8 md:py-16">
      <div className="flex flex-col items-start md:items-center">
        <h2 className={`${primaryFont.className} font-semibold text-fluid-heading2 mb-3`}>About Me
        </h2>
        <div className="bg-black block h-2 w-10 -mt-5 mb-10"></div>
      </div>
        <div className="grid grid-rows-1 md:grid-cols-2 mb-8 gap-8 md:gap-16">
          <div className="flex flex-col">
            <h3 className="text-fluid-md font-semibold mb-2 tracking-widest">Get to know me</h3>
            <div className="flex flex-col gap-6 max-w-2xl mb-4">
              <p className="text-fluid-sm font-normal leading-relaxed">I am a software developer with over 3 years of experience who is specializing in building responsive, stable, and reliable app with seamless user experiences using my expertise and knowledges different tools and programming languages.</p>
              <p className="text-fluid-sm font-normal leading-relaxed">I am always willing to look for collaborations where I am able to learn, improve, and grow as a developer. if you believe with my skillset and experience, feel free to reach out and contact me</p>
            </div>
            <Link href="#projects">
              
              <Button size="default" variant="default">Projects</Button>
            </Link>
          </div>
          <div className="flex flex-col leading-relaxed">
            <h3 className="text-fluid-md font-semibold mb-2 tracking-widest">My tools</h3>
            <ul className="flex flex-wrap gap-2 text-fluid-sm font-normal  max-w-xl">
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Javascript</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Typescript</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Python</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">C++</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">React</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Next</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Express</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Node</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Figma</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">SASS / SCSS</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">TailwindCSS</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Bootstrap</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Figma</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Linux</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Docker</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Nginx</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Caddy</li>
            </ul>
          </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-fluid-md font-semibold mb-2 tracking-widest">What i offer</h3>
        <div className="flex flex-wrap md:grid-cols-4 gap-6">
          <h3 className="text-fluid-sm font-normal tracking-widest  ">Customized Software Application</h3>
          <h3 className="text-fluid-sm font-normal tracking-widest  ">Frontend Development</h3>
          <h3 className="text-fluid-sm font-normal tracking-widest  ">Backend Development</h3>
          <h3 className="text-fluid-sm font-normal tracking-widest  ">DevOps</h3>
          <h3 className="text-fluid-sm font-normal tracking-widest ">UI/UX Design</h3>
          <h3 className="text-fluid-sm font-normal tracking-widest ">CMS Integration</h3>
          <h3 className="text-fluid-sm font-normal tracking-widest ">Web API Development</h3>
          <h3 className="text-fluid-sm font-normal tracking-widest ">Responsive Web Design</h3>
          <h3 className="text-fluid-sm font-normal tracking-widest ">On-Page Optimization</h3>
          <h3 className="text-fluid-sm font-normal tracking-widest ">Enhanced Security</h3>
          <h3 className="text-fluid-sm font-normal tracking-widest ">Web Hosting</h3>     
        </div>
      </div>
    </section>
  )
}