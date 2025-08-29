import { primaryFont } from "@/lib/font";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="mx-auto container py-8 md:py-16">
      <div className="flex flex-col items-start md:items-center">
        <h2 className={`${primaryFont.className} font-semibold text-fluid-heading2 mb-3`}>Featured Works
        </h2>
        <div className="bg-black block h-2 w-10 -mt-5 mb-10"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between rounded-2xl shadow-xl shadow-gray-400 overflow-hidden">
        <div className="max-w-2xl overflow-hidden">
          <Image
            src="/images/image.png"
            alt="logo-linkedin"
            priority
            width={2400}
            height={800}
            className="object-fit w-full h-auto"
          /> 
        </div>
        <div className="flex flex-col gap-2 p-6 bg-white border-l text-foreground">
          <h3 className="text-fluid-base font-semibold mb-2">Sutha Karya Steelindo</h3>
          <p className="text-fluid-sm font-normal">Full stack business portfolio website with email submission functionality</p>
        </div>
      </div>
    </section>
  )
}