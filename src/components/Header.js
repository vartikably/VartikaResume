import { Link } from "react-router-dom";
import pdfFile from '../resource/Vartika_Agarwal_Resume.pdf';
import { useState } from 'react';


const Header = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const menuFetch = ()=>{
        let menu = document.getElementById('menu');
        menu.classList.toggle('top-[50px]')
    }
    return(
        <div className="header-container flex p-1 m-1 justify-between text-xl">
            <div className="flex md:text-xl text-sm">
                <span className="px-1">🟡</span>
                <span className="px-1 font-bold"><Link to={"/"}>Vartika Agarwal</Link></span>
                <span className="px-1">Sr. FullStack Developer</span>
            </div>
            <div id="menu" className="duration-200 absolute md:relative flex md:flex-row flex-col top-[-100%] md:top-[inherit] w-40 right-0 bg-gray-200 md:bg-transparent">
                {/* <span className="px-1"><a href={pdfFile} download="VartikaAgarwal_Resume.pdf"> Resume </a></span> */}
                <div  className="relative inline-block text-left text-sm md:text-xl">
                    <div>
                        <button type="button" className="flex flex-row w-full justify-center text-xl" onClick={()=>{setIsOpen(!isOpen);}} id="menu-button" aria-expanded="true" aria-haspopup="true">
                        Resume
                            <svg className="-mr-1 h-5 w-5 mt-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    {isOpen && (<div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div className="py-1" role="none">
                            <a href={pdfFile} target="_blank" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-1">View Resume</a>
                            <a href={pdfFile} download="VartikaAgarwal_Resume.pdf" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0">Download Resume</a>
                        </div>
                    </div>)}
                </div>
                <span className="px-1"><Link to={"/contact"}>Contact</Link></span>
            </div>
            <button className="text-2xl md:hidden" onClick={()=>{menuFetch();}}>
                <ion-icon id="menuToggle"  className="cursor-pointer" name="menu-outline"></ion-icon>
            </button>
        </div>
    )
}
export default Header;