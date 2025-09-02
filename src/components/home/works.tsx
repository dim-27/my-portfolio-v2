import { primaryFont } from "@/lib/font";
import Image from "next/image";
import { Button } from "../ui/button/button";
import Link from "next/link";

export default function Works() {
  return (
    <section className="mx-auto container py-8 md:py-16" id="works">
      <div className="flex flex-col items-start md:items-center">
        <h2 className={`${primaryFont.className} font-semibold text-fluid-heading2 mb-3`}>Featured Works
        </h2>
        <div className="bg-black block h-2 w-10 -mt-5 mb-10"></div>
      </div>
      <div className="flex flex-col md:flex-row border border-black justify-between rounded-2xl shadow-xl shadow-gray-400 overflow-hidden">
        <div className="max-w-2xl overflow-hidden max-h-[20em] md:max-h-[30em]">
          <Image
            src="/images/project-1.png"
            alt="project-1"
            priority
            width={2400}
            height={800}
            className="object-fit w-full h-full lg:h-auto"
          /> 
        </div>
        <div className="flex flex-col justify-between bg-secondary-background border-l text-foreground p-8">
          <div className="flex flex-col">
            <h3 className="text-fluid-base font-semibold">Sutha Karya Steelindo</h3>
            <p className="text-fluid-sm font-normal">Full stack business portfolio website with email submission functionality</p>
            <ul className="flex flex-wrap gap-2 text-fluid-xs md:text-fluid-sm font-normal my-8">
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Typescript</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">React</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Express</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Node</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Figma</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">TailwindCSS</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Figma</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Docker</li>
              <li className="border p-2 shadow-black shadow-md rounded-sm whitespace-nowrap">Caddy</li>
            </ul>
          </div>
          <Link href="https://suthakaryasteelindo.com/" target="_blank" className="cursor-pointer">
            <Button variant="default" size="default">Visit Site</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}