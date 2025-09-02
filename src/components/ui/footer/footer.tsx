import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className='bg-primary-background w-full p-4'>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between text-fluid-base max-w-7xl gap-4">
        <div className="font-bold">© {new Date().getFullYear()} Dimas Firmanda. All rights reserved
        </div>
        <div className="max-w-40 cursor-pointer flex flex-row gap-4">
          <Link
            href="https://www.linkedin.com/in/muhammad-dimas-firmanda/"
            target="_blank"
          >
            <Image
              src="/images/linkedin.png"
              alt="icon-linkedin"
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
              alt="icon-github"
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
              src="/images/mail.png"
              alt="icon-mail"
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