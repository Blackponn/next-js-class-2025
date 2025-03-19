import MenuBar from '../../components/MenuBar';

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-[3rem] font-bold text-[#2400C4] max max-w-[48rem] italic mt-[-5rem]">" I see possibilities where others see limitations. Blending 3D and fashion, I'm redefining design."  </h1>
        <p className="mt-16 text-lg text-[#2400C4] bg-white border border-[#2400C4] p-2 px-4 rounded-[50pt] cursor-pointer transition-colors duration-300 hover:bg-[#1A0099] hover:text-white">
        more
      </p>
      </main>
    </>
  );
}