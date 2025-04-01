export default function ContactCard({name, description, imageUrl = "/menu.svg"}) {
    return (
        // in class assignment
        <div className="db shadow-md rounded-[50px] p-[16px] flex items-center gap-[8px] py-[8px]">
           <img src={imageUrl} className="w-[48px] rounded-[50px]" />
           <h2 className="text-[24px] font-bold">{name}</h2>
           <p className="text-[16px] font-light">{description}</p>
            </div>
    )
}