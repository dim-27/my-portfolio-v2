"use client";
import { primaryFont } from "@/lib/font";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function Hero() {
  const text = "Hey I'm ";
  const name = "Dimas";
  
  return (
    <section className="bg-primary-background w-full py-8 md:py-16" id="hero">
      <div className="flex flex-col">
        <div className="flex min-[256px]:flex-col min-[480px]:flex-row">
          <div className={`${primaryFont.className} font-extrabold text-fluid-heading1 leading-40 relative overflow-hidden inline-block -mb-24 md:mb-2`}
            >
            {text.split("").map((word, index) => (
              <motion.span
                key={index}
                initial={{y: '300%'}}
                animate={{y: '0%'}}
                viewport={{once: true}}
                className="inline-block"
                transition={{duration: 1, delay: 0.04 * index, ease: [0.2, 0.65, 0.3, 0.9]}}
                style={{marginRight: word === " " ? "0.2em" : "-0.02em"}}
              >
                {word}    
              </motion.span>
            ))}
          </div>
          <div className={`${primaryFont.className} font-extrabold text-fluid-heading1 leading-40 relative overflow-hidden inline-block -mb-2`}>
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{y: '300%'}}
                animate={{y: '0%'}}
                viewport={{once: true}}
                className="inline-block"
                transition={{duration: 1, delay: 0.08 * index, ease: [0.2, 0.65, 0.3, 0.9]}}
                style={{marginRight: char === " " ? "0.2em" : "-0.02em"}}
              >
                {char}
              </motion.span>                
            ))}
          </div>
        </div>
        <motion.h3 className={`${primaryFont.className} font-normal italic text-fluid-base leading-normal mb-6`}
          initial={{y: '100%', opacity: 0}}
          animate={{y: '0%', opacity: 1}}
          viewport={{once: true}}
          transition={{duration:0.9, delay: 1, ease: [0.2, 0.65, 0.3, 0.9]}}
        >
          Software Developer and Designer
        </motion.h3>
        <div className="flex flex-col min-[425px]:flex-row">
          <div className="flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-6">
              <motion.div
                className="space-y-8"
                initial={{opacity: 0, x: 20}}
                animate={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration:1, delay: 1}}
              >
                <h1 className="max-w-xl font-normal text-fluid-base leading-relaxed">I believe in crafting a seamless digital experiences that blends creativity and interactive storytelling.</h1>
              </motion.div>
                <motion.div
                initial={{opacity: 0, x: 20}}
                animate={{opacity: 1, x: 0}}
                viewport={{once: true}}
                transition={{duration:1, delay: 1.5}} 
                className="max-w-48"
                >
                <div className="cursor-pointer flex flex-row gap-4">
                  <Link
                    href="https://www.linkedin.com/in/muhammad-dimas-firmanda/"
                    target="_blank"
                  >
                    <Image
                      src="/images/linkedin6.png"
                      alt="logo-linkedin"
                      priority
                      width={2400}
                      height={800}
                      className="object-fit w-full h-auto hover:opacity-75"
                    />
                  </Link>
                  <Link
                    href="https://github.com/dim-27"
                    target="_blank"
                  >
                    <Image
                      src="/images/github.png"
                      alt="logo-github"
                      priority
                      width={2400}
                      height={800}
                      className="object-fit w-full h-auto hover:opacity-75"
                    />
                    
                  </Link>
                  <Link
                    href="mailto:dimasfirmanda27@gmail.com"
                    target="_blank"
                  >
                    <Image
                      src="/images/mail1.png"
                      alt="logo-github"
                      priority
                      width={2400}
                      height={800}
                      className="object-fit w-full h-auto hover:opacity-75"
                    />
                  </Link>
                </div>
              </motion.div>
            </div>
            <motion.div 
              className="flex flex-col text-fluid-sm gap-2 tracking-wide"
              initial={{opacity: 0, x: 20}}
              animate={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration:1, delay: 1.5}}
            >
              <p className={`font-regular`}>Based in Jakarta</p>
              <p className={`font-medium`}>Working Worldwide</p>
            </motion.div>
          </div>
          <div className="flex items-end my-2">
            <motion.div 
              initial={{opacity: 0, y:100}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -100}}
              viewport={{once: true}}
              transition={{duration:0.9, delay: 1, ease: [0.2, 0.65, 0.3, 0.9]}}   
              className="w-full min-[256px]:max-w-24 min-[425px]:max-w-64 sm:max-w-sm"
            >
              <Image
                src="/images/foto_dimas.jpg"
                alt="Profile 1"
                priority
                width={2400}
                height={800}
                className=" object-cover rounded-full w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}