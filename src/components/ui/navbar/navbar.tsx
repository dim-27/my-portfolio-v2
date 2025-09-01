

export default function Navbar() {
  return (
    <nav className='w-full bg-primary-background pt-6 text-fluid-base p-4'>
      <div className="flex justify-between items-center h-16 mx-auto max-w-7xl container">
        <div className="font-bold">Dimas Firmanda</div>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 font-regular">
          <li>services</li>
          <li>about</li>
          <li>works</li>
        </ul>
      </div>
    </nav>
  )  
}