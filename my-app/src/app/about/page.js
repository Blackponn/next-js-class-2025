import MenuBar from '../../components/MenuBar';

export default function About() {
  return (
    <>
      <main style={{ marginTop: '5rem' }} className="flex flex-col items-start pl-[8rem] min-h-screen bg-white-50">
      <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '38%',
            backgroundImage: "url('/images/S__5038173.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
          }}
        ></div>
        <h1 className="text-[6.4rem] font-regular text-[#2400C4] italic my-4rem">Hi! My name is</h1>
        <h2 className="text-[7.8rem] font-bold text-[#2400C4] mt-[-3rem]">ARCHAWIT.</h2>
        <p className="mt-4 text-[0.9rem] text-[#3C25A4] max-w-[43rem] mt-[-1rem] ">I'm a design student with a dual passion for 3D art and fashion design. I'm fascinated by the digital sculpting of intricate 3D models and the creative process of garment design. I enjoy exploring how 3D software can enhance fashion visualization, from creating virtual runway shows to simulating fabric movement.</p>
      </main>
    </>
  );
}