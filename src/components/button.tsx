export type Buttonprops = {
    name: string;
    type: "submit" | "button";
    value: string;
};
// component Button
function Button(props: Buttonprops) {
    return (
            <div className="w-full mx-auto border-2">
                <button className="text-[2rem] text-center px-4 py-2 text-[white] bg-primary_color rounded-[0.5rem] w-[17rem] h-[6rem]"
                    type={props.type}
                >
                    {props.value}</button>

            </div>
        
    )
}

export default Button