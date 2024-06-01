export default function Card_5({name, price}) {
    return (
        <div className="w-[420px] h-[120px] bg-[#eeeeee] flex justify-around items-center dark:bg-[#222]">
            <h1 className="text-[20px]">{name}</h1>
            <p className="text-[25px] font-[700]">{price}</p>
        </div>
    )
}