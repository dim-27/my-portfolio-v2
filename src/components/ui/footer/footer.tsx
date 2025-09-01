import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className='bg-primary-background w-full p-12'>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between text-fluid-base max-w-7xl gap-4">
        <div className="font-bold">© {new Date().getFullYear()} Dimas Firmanda. All rights reserved
        </div>
        <div className="max-w-40 cursor-pointer flex flex-row gap-4">
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
            href="mailto:dimasfirmanda.dev@gmail.com"
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
      </div>
    </section>
  )  
}