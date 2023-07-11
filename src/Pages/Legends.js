import React from "react"
import PX1 from '../Picture/CANTONA.png'
import PX2 from '../Picture/WAYNE ROONEY.png'
import PX3 from '../Picture/SCHOLES.png'
import PX4 from '../Picture/ROY KEANE.png'
import PX5 from '../Picture/SIR BOBBY.png'
import PX6 from '../Picture/GIGS.png'
import PX7 from '../Picture/OLE.png'
import PX8 from '../Picture/COLE.png'
import PX9 from '../Picture/BEKAM.png'
const Legends = () =>{
    return (
    
<div className="">
<h1 className="text-start text-3xl text-black font-bold ml-[45px] uppercase pt-[100px] ">Leg<span className="text-red-500">ends</span></h1>
<span class="inline-grid grid-cols-3 gap-7 pr-[170px] pb-[50px]">
  <a href="https://www.manutd.com/en/players-and-staff/detail/eric-cantona"target="_blank" alt="Cantona"><span><img src={PX1} className="pt-5 rounded transition duration-300 ease-in-out hover:opacity-50 "></img></span></a>
  <a href="https://www.manutd.com/en/players-and-staff/detail/wayne-rooney"target="_blank"><span><img src={PX2} className="pt-5 rounded transition duration-300 ease-in-out hover:opacity-50"></img></span></a>
  <a href="https://www.manutd.com/en/players-and-staff/detail/paul-scholes"target="_blank"><span><img src={PX3} className="pt-5 rounded transition duration-300 ease-in-out hover:opacity-50"></img></span></a>
  <a href="https://www.manutd.com/en/players-and-staff/detail/roy-keane"target="_blank"><span><img src={PX4} className="pt-5 rounded transition duration-300 ease-in-out hover:opacity-50"></img></span></a>
  <a href="https://www.manutd.com/en/players-and-staff/detail/sir-bobby-charlton"target="_blank"><span><img src={PX5} className="pt-5 rounded transition duration-300 ease-in-out hover:opacity-50"></img></span></a>
  <a href="https://www.manutd.com/en/players-and-staff/detail/ryan-giggs"target="_blank"><span><img src={PX6} className="pt-5 rounded transition duration-300 ease-in-out hover:opacity-50"></img></span></a>
  <a href="https://www.manutd.com/en/players-and-staff/detail/ole-gunnar-solskjaer"target="_blank"><span><img src={PX7} className="pt-5 rounded transition duration-300 ease-in-out hover:opacity-50"></img></span></a>
  <a href="https://www.manutd.com/en/players-and-staff/detail/andy-cole"target="_blank"><span><img src={PX8} className="pt-5 rounded transition duration-300 ease-in-out hover:opacity-50"></img></span></a>
  <a href="https://www.manutd.com/en/players-and-staff/detail/david-beckham"target="_blank"><span><img src={PX9} className="pt-5 rounded transition duration-300 ease-in-out hover:opacity-50"></img></span></a>
</span>
<br></br>

</div>
    )
}
export default Legends