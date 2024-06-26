export default function Card_4({img, title, desc}) {
    return (
        <div className="dark:text-[#eeeeee] w-[300px]">
            <img src={img} alt="" className="w-[300px]"/>
            <h3 className="text-[21px] my-[15px]">{title}</h3>
            <p className="text-[16px]">{desc}</p>
        </div>
    )
}