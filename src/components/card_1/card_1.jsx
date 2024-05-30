export default function Card_1({img, text, button, hidden}) {
    return (
        <div className="flex flex-col items-center dark:text-[#eeeeee] ">
            <img src={img} alt="" />
            <p className="text-[16px] mt-[10px] w-[190px] text-center">{text}</p>
            <button className={`${hidden} mt-[15px]`}>{button}</button>
        </div>
    )
}