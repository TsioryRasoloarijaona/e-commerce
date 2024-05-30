import DrawerComponent from "../components/drawer";
import { VscMenu } from "react-icons/vsc";
import { IoHomeOutline } from "react-icons/io5";
import { GrCircleInformation } from "react-icons/gr";
import { FaCar } from "react-icons/fa";
import { RiContactsBook3Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
    const header : React.ReactNode = <h1>menu</h1>
    const content : React.ReactNode = 
    <ul className="space-y-4">
        <li className="flex items-center gap-5 text-xl cursor-pointer"><IoHomeOutline className="text-2xl text-black"/>home</li>
        <li className="flex items-center gap-5 text-xl cursor-pointer"><GrCircleInformation className="text-2xl text-black"/>about us</li>
        <li className="flex items-center gap-5 text-xl cursor-pointer"><FaCar className="text-2xl text-black"/>our car</li>
        <li className="flex items-center gap-5 text-xl cursor-pointer"><RiContactsBook3Line className="text-2xl text-black"/>contact</li>
        
    </ul>
    const button : React.ReactNode = <p><GiHamburgerMenu className="text-4xl text-white"/></p>
    const style : string = ''
  return (
    <>
        <DrawerComponent position={'left'} header = {header} content = {content} button = {button} cssButton={style}/>
    </>
  )

}
