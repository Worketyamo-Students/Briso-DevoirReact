import Button from "@/components/button";
import Button2 from "@/components/button2";
import Nav from "@/components/nav";
import { CiSearch } from "react-icons/ci";
import Background from "@/components/background";

const App = () => {
    return (
        <div className="w-screen h-screen bg-[black]">
            <header className=" bg-[blue] flex justify-around items-center ">
                <h2 className="text-primary_color text-[4rem]">HelpemOUT</h2>
                <Nav />
                <div className="flex justify-center items-center gap-[1.6rem]">
                    <div className="">
                        <CiSearch size={24}/>
                    </div>
                    <Button name="login" type="submit" />
                </div>
            </header>
            <section className="flex  items-center px-[8rem] bg-[pink]">
                <div className="flex flex-col items-center justify-center flex-1 gap-[2rem]">
                    <h1 className="font-bold text-[6.5rem]">Help build a <span className="text-primary_color">Better</span>
                        <span className="text-primary_color"> Society </span>for
                        <span className="text-primary_color"> all</span></h1>
                    <p className="text-[2.2rem]">Lorem ipsum dolor sit amet consectetur. Ac amet libero facilisis hendrerit pulvinar massa placerat. </p>
                    <Button2 name="donation" type="button" />
                </div>
                <Background />
            </section>
        </div>
    )
}
export default App