import React from "react"
import PX1 from '../Picture/De Gea.png'
import PX2 from '../Picture/Dean.png'
import PX3 from '../Picture/Lindelof.png'
import PX4 from '../Picture/Licha.png'
import PX5 from '../Picture/Shaw.png'
import PX6 from '../Picture/AWB.png'
import PX7 from '../Picture/Dalot.png'
import PX8 from '../Picture/Varane.png'
import PX9 from '../Picture/Mount.png'
import PX10 from '../Picture/Bruno.png'
import PX11 from '../Picture/case.png'
import PX12 from '../Picture/Fred.png'
import PX13 from '../Picture/mctom.png'
import PX14 from '../Picture/Eriksen.png'
import PX15 from '../Picture/Martial.png'
import PX16 from '../Picture/Rashy.png'
import PX17 from '../Picture/Anthony.png'
import PX18 from '../Picture/Sancho.png'
import PX19 from '../Picture/Garnacho.png'
import PX20 from '../Picture/greenwood.png'




const Player =() =>{
    return(
<div className="">
<h1 className="text-start text-3xl text-black font-bold ml-[45px] uppercase ">Goal<span className="text-red-500">Keepers</span></h1>
<span class="inline-grid grid-cols-3 gap-7 pr-[170px]">
  <span><img src={PX1} className="pt-5 rounded"></img></span>
  <span><img src={PX2} className="pt-5 rounded"></img></span>
</span>
<br></br>


<h1 className="text-start text-3xl text-black font-bold ml-[45px] uppercase pt-[50px]">Defen<span className="text-red-500">ders</span></h1>
<span class="inline-grid grid-cols-3 gap-7 pr-[150px]">
  <span><img src={PX3} className="pt-5 rounded"></img></span>
  <span><img src={PX4} className="pt-5 rounded"></img></span>
  <span><img src={PX5} className="pt-5 rounded"></img></span>
  <span><img src={PX6} className="pt-5 rounded"></img></span>
  <span><img src={PX7} className="pt-5 rounded"></img></span>
  <span><img src={PX8} className="pt-5 rounded"></img></span>

</span>
<h1 className="text-start text-3xl text-black font-bold ml-[45px] uppercase pt-[50px]">Mid<span className="text-red-500">Fielder</span></h1>
<span class="inline-grid grid-cols-3 gap-7  pr-[130px]" >
<span><img src={PX9} className="pt-5 rounded" ></img></span>
  <span><img src={PX10} className="pt-5 rounded"></img></span>
  <span><img src={PX11} className="pt-5 rounded"></img></span>
  <span><img src={PX12} className="pt-5 rounded"></img></span>
  <span><img src={PX13} className="pt-5 rounded"></img></span>
  <span><img src={PX14} className="pt-5 rounded"></img></span>
</span>\
<h1 className="text-start text-3xl text-black font-bold ml-[45px] uppercase pt-[50px]">For<span className="text-red-500">wards</span></h1>
<span class="inline-grid grid-cols-3 gap-9 pb-4 pr-[170px]">
<span><img src={PX15} className="pt-5 rounded"></img></span>
  <span><img src={PX16} className="pt-5 rounded"></img></span>
  <span><img src={PX17} className="pt-5 rounded"></img></span>
  <span><img src={PX18} className="pt-5 rounded"></img></span>
  <span><img src={PX19} className="pt-5 rounded h-[420px]"></img></span>
  <span><img src={PX20} className="pt-5 h-[415px] rounded "></img></span>

  </span>

</div>
    )
}
export default Player