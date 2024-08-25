import Sign from "@/components/sign";
import Button from "@/components/button";
import Nav from "@/components/nav";
import Span from "@/components/span";
import { CiSearch } from "react-icons/ci";
import Background from "@/components/background";
import Footerb from "@/components/footerb";
import { ModeToggle } from "@/components/mode-toogle";

// default running app
const App = () => {
    return (
        <div className="w-screen h-screen ">
            {/* header section */}
            <header className="flex items-center justify-around font-source mt-[1.5rem]">
                <h2 className="text-primary_color text-[4rem]">HelpemOÜT</h2>
                <Nav />
                <div className="flex justify-center items-center gap-[2rem]">
                    <div className="">
                        <CiSearch size={24} />
                    </div>
                    <Sign name="login" type="submit" />
                        <ModeToggle />
                </div>
            </header>
            {/* section part */}
            <section className="bg-gradient-to-tr from-primary_color/5 to-transparent flex justify-center h-[73%] mx-[6rem] mt-6 rounded-[3rem]">
                <div className="flex flex-col justify-center flex-1 gap-[2.5rem] px-[13rem]">
                    <h1 className="font-bold font-popins text-[6.5rem]">Help build a
                        <Span value=" Better Society" /> for
                        <Span value=" All" />
                    </h1>
                    <p className="fon-normal text-[2.4rem]">Lorem ipsum dolor sit amet consectetur. Ac amet libero facilisis hendrerit pulvinar massa placerat. </p>
                    <Button name="donation" type="button" value="Donate now" />
                </div>
                <Background />
            </section>
            {/* footer section */}
            <footer className="mt-[3rem]">
                <Footerb />
            </footer>
        </div>
    )
}
export default App