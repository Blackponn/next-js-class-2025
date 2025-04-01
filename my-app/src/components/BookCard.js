export default function BookCard({ Title = 'Title', Year = 'Year', Publisher = 'Publisher'}) {
    return(
        <div className="shadow-md rounded-[24px] p-[32px] flex flex-col">
            <div className="text-[36px] font-bold text-[#2400C4]">{Title}</div>
            <div className="text-[24px] font-gray-500 text-[#2400C4]">{Year}</div>
            <div className="text-[24px] font-gray-500 text-[#2400C4]">{Publisher}</div>
        </div>
    )
}