import Usericon from "./user_icon"

//component Footer ,combination of different style buttins
function Footerb(){
    return(
        
        <div className="flex items-center justify-center gap-[8rem] text-[2rem]">
        <button type="button" className="bg-secondary_color w-[10%] h-[5rem] flex justify-center items-center gap-[1rem] rounded-[0.5rem]">
        <Usericon size={30} color="white"/>
         <p className="text-primary_color">Orphans</p> 
      </button>
      <button  type="button" className="bg-secondary_color w-[20%] h-[5rem] flex justify-center items-center gap-[1rem] rounded-[0.5rem]">
      <Usericon size={30} color="white"/>
      <p className="text-primary_color">Poverty Relieved Childen</p> 
      </button>
      <button type="button" className="bg-secondary_color w-[22%] h-[5rem] flex justify-center items-center gap-[1rem] rounded-[0.5rem]">
      <Usericon size={30} color="white"/>
      <p className="text-primary_color">Scholarship Based Students</p> 
      </button>
      </div>
    )
}

export default Footerb