

export default function Navbar() {
  return (
    <nav className='w-full bg-primary-background pt-6'>
      <div className="flex justify-between items-center h-16 mx-auto max-w-7xl px-8">
        <div className="font-bold">Dimas Firmanda</div>
        <ul className="flex flex-col md:flex-row md:gap-4 font-regular">
          <li>services</li>
          <li>works</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </div>
    </nav>
  )  
}