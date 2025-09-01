import { primaryFont } from "@/lib/font";

export default function Contacts() {
  return (
    <section className="mx-auto container py-8 md:py-16">
        <div className="flex flex-col items-start md:items-center">
          <h2 className={`${primaryFont.className} font-semibold text-fluid-heading2 mb-3`}>Contacts
          </h2>
        <div className="bg-black block h-2 w-10 -mt-5 mb-10"></div>
      </div>
    </section>
  )
}