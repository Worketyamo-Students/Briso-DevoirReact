type buttonProps = {
    name: string;
    type: "submit" | "button"
};
// component buuton combination
function Sign(props: buttonProps) {
    return (
        <div className="flex items-center">
            <div className="w-[55%] mx-auto  border-2">
                <button className="font text-[2rem] px-4 py-2 text-[black] bg-[white] rounded-[0.5rem] w-[12rem] h-[4.8rem] hover:text-primary_color"
                    type={props.type}
                >
                    Login</button>

            </div>
            <div className="w-[55%] mx-auto  border-2">
                <button className="text-[2rem] px-4 py-2 text-[white] bg-primary_color rounded-[0.5rem] w-[12rem] h-[4.8rem]"
                    type={props.type}
                >
                    Register</button>

            </div>
        </div>
    )
}

export default Sign