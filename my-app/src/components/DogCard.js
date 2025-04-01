export default function DogCard({ name = 'No name', description = 'No description'}) {
    return(
        <div className="shadow-md rounded-[24px] p-[32px] flex flex-col">
            <div className="text-[16px] font-bold">{name}</div>
            <div className="text-[12px] font-gray-500">{description}</div>
        </div>
    )
}