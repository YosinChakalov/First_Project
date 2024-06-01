import { Button } from "@mui/material";

export default function Card_3({img, data, text, duration}) {
    return (
        <div className="w-[290px] m-auto border-2 mt-[30px] xl:flex-wrap lg:flex-wrap  md:flex-wrap sm:flex-wrap st:flex-wrap">
            <img src={img} alt="" className="w-[100%]" />
            <p className="pl-[15px] text-[15px] text-[#b0aeae] mt-[10px]">{data}</p>
            <p className="pl-[15px] text-[20px] my-[15px] font-[700] cursor-pointer dark:text-[#eeeeee] dark:hover:text-[grey] hover:text-[grey] transition-[1s]">{text}</p>
            <Button disabled variant="outlined" style={{marginLeft: 15, marginBottom: 15}}>{duration}</Button>
        </div>
    )
}