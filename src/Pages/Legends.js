import React from "react"
import PX1 from '../Picture/AWB.png'
import PX2 from '../Picture/Anthony.png'
const Legends = () =>{
    return (
    
<div className="">
<h1 className="text-start text-3xl text-black font-bold ml-[45px] uppercase pt-[100px]">Goal<span className="text-red-500">Keepers</span></h1>
<span class="inline-grid grid-cols-3 gap-7 pr-[170px]">
  <span><img src={PX1} className="pt-5 rounded"></img></span>
  <span><img src={PX2} className="pt-5 rounded"></img></span>
</span>
<br></br>

</div>
    )
}
export default Legends