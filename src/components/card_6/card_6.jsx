export default function Card_6({img, text}) {
    return (
        <div className="w-[250px] bg-[#eeeeee] dark:bg-[#222] dark:text-[#eeeeee] p-[15px] 2xl:flex-wrap xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap mb-[20px]">
            <img src={img} alt="" className="w-[100px]" />
            <p className='w-[77%] pl-[20px] text-[16px]'>{text}</p>
        </div>
    )
}