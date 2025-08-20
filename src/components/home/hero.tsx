"use client";
import { Button } from "@/components/ui/button/button";
import { headingFontItalic, headingFontRegular, primaryFont } from "@/lib/font";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function Hero() {
  const text = "Hey I'm Dimas"
  return (
    <div className="bg-primary-background w-full p-8 min-h-screen">
      <section className="max-w-6xl mx-auto my-24">
        <span className={`${headingFontItalic.className} font-extrabold text-fluid-3xl sm:text-fluid-5xl inline-block overflow-hidden`}
          >
            {text.split("").map((word, index) => (
              <motion.span
                key={index}
                initial={{y: '100%'}}
                animate={{y: '0%'}}
                viewport={{once: true}}
                className="inline-block"
                transition={{duration: 1, delay: 0.04 * index, ease: [0.2, 0.65, 0.3, 0.9]}}
                style={{marginRight: word === " " ? "0.2em" : "-0.02em"}}
              >
                {word}    
              </motion.span>
            ))}                
        </span>
        <div className="relative overflow-hidden">
          <motion.h3 className={`${headingFontRegular.className} font-black text-fluid-base leading-normal flex justify-end my-4`}
            initial={{y: '100%', opacity: 0}}
            animate={{y: '0%', opacity: 1}}
            viewport={{once: true}}
            transition={{duration:0.9, delay: 1, ease: [0.2, 0.65, 0.3, 0.9]}}
          >
            Software Developer and Designer
          </motion.h3>
        </div>
        <div className="flex flex-col justify-around md:flex-row gap-16 md:gap-4">
          <motion.div className={`${primaryFont.className} flex flex-row md:flex-col gap-4 order-2 md:order-1`}
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration:1, delay: 1, ease: [0.4, 0, 0.2, 1]}}
          >
            <div className="flex flex-col gap-1">
              <p className={`font-regular text-fluid-xs tracking-wide`}>Based in Jakarta</p>
              <p className={`font-regular text-fluid-xs tracking-wide`}>Currently Available</p>
            </div>
            <div className="w-40 md:w-full max-w-6xl">
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
          <div className="flex flex-col md:text-right gap-4 order-1 md:order-2 justify-end">
            <motion.div
              className="space-y-4"
              initial={{opacity: 0, x: 20}}
              animate={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration:1, delay: 1}}
            >
              <h1 className={`${primaryFont.className} max-w-md font-regular text-xl lg:text-2xl`}>I believe in crafting a seamless digital experiences that blends creativity and interactive storytelling.</h1>
              <Button size="lg" className="rounded-full p-6" variant="default">LET'S COLLAB</Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}