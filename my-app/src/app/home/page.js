import MenuBar from '../../components/MenuBar';
import DogCard from '../../components/DogCard';

export default async function Home() {
  const response = await fetch("https://dogapi.dog/api/v2/breeds")
  const resJson = await response.json()
  const dogs = resJson.data

console.log(dogs)


  return (
    <>
    {/* Assignmentที่เป็นการบ้าน */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-white">
        <h1 className="text-[3rem] font-bold text-[#2400C4] max max-w-[48rem] italic mt-[-5rem]">" I see possibilities where others see limitations. Blending 3D and fashion, I'm redefining design."  </h1>
        <p className="mt-16 text-lg text-[#2400C4] bg-white border border-[#2400C4] p-2 px-4 rounded-[50pt] cursor-pointer transition-colors duration-300 hover:bg-[#1A0099] hover:text-white">
        more
      </p>
      </main>

For Dog
    { dogs.map(dog => (
      <DogCard name={dog.attributes.name} description={dog.attributes.description} key={dog.name}/>
    )) }

    </>
  );
}