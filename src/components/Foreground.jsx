import Card from "./Card"
import {motion} from "framer-motion"

 const data = [
    {desc: "Lorem ipsum  sit amet consectetur adipisicing elit. ", filesize:".9mb" },

    {desc: "Lorem ipsum dolor sit amet  adipisicing elit. ",  filesize:".199mb" },

    {desc: "Lorem ipsum dolor sit amet consectetur  elit. ", filesize:".65mb"}
  ];

const Foreground = () => {

  return (

    <div className="w-full h-full fixed z-[3] top-0 left-0 flex gap-10 flex-wrap  p-5">
       
           {data.map((item, index)=>(
                <Card data={item}></Card>
            )) }

    </div>
  )
}

export default Foreground