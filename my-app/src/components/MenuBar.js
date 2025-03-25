import Link from 'next/link';

export default function MenuBar() {
  return (
    // homework assignment
    <nav className="flex bg-white shadow-lg p-1 justify-center space-x-18 w-[37.5%] opacity-80 rounded-[50pt] mx-auto my-8 0 border-2 border-[#2300BE] min-w-[34.4rem]">
      <Link href="/home" className="text-[#2300BE] font-bold hover:text-white hover:bg-[#2400C4] px-4 py-2 rounded-[50pt] font-montserrat">Home</Link>
      <Link href="/about" className="text-[#2300BE] font-bold hover:text-white hover:bg-[#2400C4] px-4 py-2 rounded-[50pt] font-montserrat">About</Link>
      <Link href="/contact" className="text-[#2300BE] font-bold hover:text-white hover:bg-[#2400C4] px-4 py-2 rounded-[50pt] font-montserrat">Contact</Link>
      <Link href="/work" className="text-[#2300BE] font-bold hover:text-white hover:bg-[#2400C4] px-4 py-2 rounded-[50pt] font-montserrat">Work</Link>
    </nav>
  );
}
