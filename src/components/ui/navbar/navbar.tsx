
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className='w-full bg-primary-background pt-6 text-fluid-base p-4'>
      <div className="flex flex-col min-[26.5em]:flex-row justify-between items-center h-16 mx-auto max-w-7xl container">
        <div className="font-bold">Dimas Firmanda</div>
        <ul className="flex flex-row gap-4 md:gap-8 font-regular">
          <Link href="#works">
            <li>works</li>
          </Link>
          <Link href="#services">
            <li>services</li>
          </Link>
        </ul>
      </div>
    </nav>
  )  
}