"use client";
import { Button } from "@/components/ui/button/button";
import { headingFontItalic, headingFontRegular, primaryFont } from "@/lib/font";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function Home() {
  const text = "Hey I'm Dimas"

  return (
    <div className="min-h-screen">
      <main className="w-full">
        <div className="pt-4 md:pt-8 leading-24 my-4 md:my-8">
          <motion.h1 className={`${headingFontItalic.className} font-extrabold text-fluid-3xl sm:text-fluid-4xl gap-1`}
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: true}}
              transition={{duration: 1}}
            >
              {text.split("").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{opacity: 0, x: -10}}
                  whileInView={{opacity: 1, x: 10}}
                  viewport={{once: true}}
                  className="text-nowrap"
                  transition={{duration: 1, delay: 0.02 * index, ease: [0.4, 0, 0.2, 1]}}
                  style={{marginRight: word === " " ? "0.2em" : "-0.02em"}}
                >
                  {word}    
                </motion.span>
              ))}                
            </motion.h1>
            <motion.h3 className={`${headingFontRegular.className} font-extralight text-fluid-lg tracking-wide leading-normal flex justify-end`}
              initial={{opacity: 0, x: 20}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration:1, delay: 1}}
            >
              Software Developer and Designer
            </motion.h3>
        </div>
        <div className="flex flex-col justify-around md:flex-row gap-8">
          <motion.div className={`${primaryFont.className} flex flex-row md:flex-col gap-4 order-2 md:order-1`}
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration:1, delay: 1, ease: [0.4, 0, 0.2, 1]}}
          >
            <div className="flex flex-col gap-1">
              <p className={`font-regular text-fluid-sm tracking-wide`}>Based in Jakarta</p>
              <p className={`font-regular text-fluid-sm tracking-wide`}>Currently Available</p>
            </div>
            <div className="w-40 md:w-full max-w-5xl">
              <Image
                src="/images/profile2.png"
                alt="Profile 1"
                priority
                width={1200}
                height={800}
                className=" object-cover rounded-md w-full h-full"
              />
            </div>
          </motion.div>
          <div className="flex flex-col md:text-right gap-4 order-1 md:order-2">
            <motion.div
              className="space-y-4"
              initial={{opacity: 0, x: 20}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration:1, delay: 1}}
            >
              <h1 className={`${primaryFont.className} max-w-md font-regular text-xl lg:text-2xl`}>I believe in crafting a seamless digital experiences that blends creativity and interactive storytelling.</h1>
              <Button size="lg" className="rounded-full p-6" variant="default">LET'S COLLAB</Button>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
