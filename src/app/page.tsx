import { Button } from "@/components/ui/button/button";
import { headingFontItalic, headingFontRegular, primaryFont } from "@/lib/font";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="w-full">
        <div className="grid grid-rows-1 lg:grid-cols-3 gap-2 min-h-[550px]">
          <div className={`${headingFontRegular.className} flex flex-row lg:flex-col items-end justify-end order-2 lg:order-1 gap-4`}>
            <div className="flex flex-col items-end justify-end">
              <p className={`font-regular text-xl tracking-widest`}>Based in Jakarta</p>
              <p className={`font-regular text-xl tracking-widest`}>Working Worldwide</p>
            </div>
            <Image
              src="/images/profile2.png"
              alt="Profile 1"
              width={1200}
              height={800}
              className=" object-cover rounded-md h-auto w-[150px] lg:w-[400px]"
            />
          </div>
          <div className="flex flex-col order-1 lg:order-2 items-end my-8 lg:text-right gap-4 col-span-2">
            <h1 className={`${headingFontItalic.className} font-extrabold text-9xl`}>Hey I'm Dimas</h1>
            <h3 className={`${headingFontRegular.className} font-extralight text-2xl tracking-widest`}>Software Developer and Designer</h3>
            <h1 className={`${primaryFont.className} max-w-md font-regular text-2xl`}>I believe in crafting a seamless digital experiences that blends creativity and interactive storytelling.</h1>
            <Button>LET'S COLLAB</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
