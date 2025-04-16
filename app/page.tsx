import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-amber-950">
    <Image className="hidden md:block" src={"/images/adbg.png"} alt="bg" fill/>
    <Image className="block md:hidden" src={"/images/mobbg.png"} alt="bg" fill/>
    <a href="https://wa.me/918755075132?text=Can%20I%20get%20more%20info%20about%20it%3F" target="_blank"
  rel="noopener noreferrer">

    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-custom bg-[#000080]/80 text-xl md:text-4xl font-bold p-5 md:p-7 flex flex-row gap-6 rounded-full border-4 hover:bg-navy-900
    active:bg-[#E6B800]
    transition duration-200" style={{boxShadow: "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;"}}>
    <Image src={"/images/whatsapp.png"} alt="whatsapp icon" width={100} height={100} className="w-15 h-15 md:w-25 md:h-25"/>
    <button>CHAT NOW</button>
    </div>
      </a>
    </div>
  );
}
