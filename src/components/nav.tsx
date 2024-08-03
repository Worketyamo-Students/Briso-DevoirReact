import Link from "./link"

function Nav() {
    return (
        <nav className="font-open">
            <ul className="font-medium text-[1.8rem] flex gap-[4rem] text-nav_color">
                <Link href="" value="Home"/>
                <Link href="" value="About us"/>
                <Link href="" value="Institutions"/>
                <Link href="" value="Library"/>
                <Link href="" value="Projects"/>
                <Link href="" value="Contact us"/>
            </ul>
        </nav>
    )
}
export default Nav