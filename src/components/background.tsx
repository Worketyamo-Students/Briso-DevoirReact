//component background
function Background(){
    return(
        <div className="relative flex-1  bg-no-repeat bg-center h-[100vh]">
            <div><img src="../../public/rectangle.svg" className="absolute left-[13rem] top-[6rem] h-[30rem]"/></div>
            <div><img src="../../public/children.svg" alt="" className="absolute left-[3.5rem] top-[8rem] h-[45rem]"/></div>
        </div>
    )
}

export default Background