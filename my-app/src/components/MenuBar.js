import Link from 'next/link';

export default function MenuBar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-center space-x-4">
      <Link href="/home" className="text-blue-500 hover:bg-sky-700">Home</Link>
      <Link href="/about" className="text-blue-500 hover:bg-sky-700">About</Link>
      <Link href="/contact" className="text-blue-500 hover:bg-sky-700">Contact</Link>
    </nav>
  );
}
