import {FaRegFileAlt} from "react-icons/fa"
import {LuDownload} from "react-icons/lu"

import {motion} from "framer-motion"

const Card = ({data}) => {

  return (

    <motion.div drag  className="relative w-60 h-72 rounded-[20px] bg-zinc-100 p-5 overflow-hidden">

        <FaRegFileAlt></FaRegFileAlt>
        <p className="mt-5 m-3 font-semibold"> pppp</p>
        
          <div className="footer absolute bottom-0 h-20 left-0 px-8 py-3">

            <div className="flex items-center justify-between mb-5 ">

                <h5 className="mr-24">0.5</h5>
                <LuDownload></LuDownload>

            </div>

          </div>
          
    </motion.div>
  )
}

export default Card