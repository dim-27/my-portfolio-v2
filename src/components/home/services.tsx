import { headingFontItalic, headingFontRegular, primaryFont } from "@/lib/font";

export default function Services() {
  return (
    <div className="bg-secondary-background w-full min-h-screen">
      <section className="max-w-6xl mx-auto text-primary-foreground p-8">
        <h1 className={`${headingFontItalic.className} font-extrabold text-fluid-3xl sm:text-fluid-4xl inline-block border-b-2 mb-16`}>What I Offer</h1>
        <div className="flex flex-col gap-12">
          <div className="w-full flex justify-starts items-start">
            <div className="max-w-md">
              <h2 className={`${headingFontRegular.className} text-fluid-xl`}>1. Web Development</h2>
              <p className={`${primaryFont.className} font-light text-fluid-xs`}>I believe in crafting a seamless digital experiences that blends creativity and interactive storytelling.</p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center md:text-center">
            <div className="max-w-md">
              <h2 className={`${headingFontRegular.className} text-fluid-xl`}>2. UI/UX Design</h2>
              <p className={`${primaryFont.className} font-light text-fluid-xs`}>I believe in crafting a seamless digital experiences that blends creativity and interactive storytelling.</p>
            </div>
          </div>
          <div className="w-full flex justify-end items-end md:text-right">
            <div className="max-w-md">
              <h2 className={`${headingFontRegular.className} text-fluid-xl`}>3. UI/UX Design</h2>
              <p className={`${primaryFont.className} font-light text-fluid-xs`}>I believe in crafting a seamless digital experiences that blends creativity and interactive storytelling.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}