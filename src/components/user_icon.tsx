import { TbUsers } from "react-icons/tb";

interface Userprops {
    size: number
    color: string
}
// component usericon  using interface UserProps
function Usericon(props:Userprops){
    return (
        <div className="border-[.4rem] border-solid border-primary_color rounded-full bg-primary_color p-[0.1rem]">
            <TbUsers size={props.size} color={props.color} className="p-[0.3rem]" />
        </div>
    )
}

export default Usericon