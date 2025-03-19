import MenuBar from '../../components/MenuBar';

export default function Work() {
  return (
    <>
      <div className="wrapper px-4 py-4">
        {/* in class assignment */}
        {/*TOP BAR HEADER*/}
      <header className="db flex justify-between items-center mb-[16px]">
      <h1 className="text-[36px] text-[#3C25A4] font-bold">ARCHAWIT</h1>
      <img className="w-[48px] h-[48px]" src='/images/noti.svg'></img>
      </header>
      <main className="db flex flex-col gap-[16px]">
      <input type="text" placeholder="search" 
      className="px-[8px] border-2 border-[#2300BE] rounded-[50px] w-[100%] py-[8px]"> 
      </input>
      <img className="db rounded-[24px] w-[100%]" src="/images/first.png"></img>
      
      <main2 className="db flex justify-between items-center">
      <h1 className="text-[36px] text-[#3C25A4]">Current Shipment</h1>
      <h2 className="text-[18px] text-grey-500">See all</h2>
      </main2>
      <main3>
        <img className="db rounded-[24] w-[100%]" src="/images/second.png"></img>
      </main3>
      </main>
      </div>
    </>
  );
}