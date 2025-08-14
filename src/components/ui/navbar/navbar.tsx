

export default function Navbar() {
  return (
    <nav className='w-full mx-a'>
      <div className="flex justify-between items-center h-16">
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