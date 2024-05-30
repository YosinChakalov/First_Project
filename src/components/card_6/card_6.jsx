export default function Card_6({img, text}) {
    return (
        <div className="w-[24%] h-[400px] bg-[#eeeeee] dark:bg-[#222] dark:text-[#eeeeee] p-[15px]">
            <img src={img} alt="" className="w-[100px]" />
            <p className='w-[77%] pl-[20px] text-[16px]'>{text}</p>
        </div>
    )
}