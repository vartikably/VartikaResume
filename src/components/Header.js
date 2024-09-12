import { Link } from "react-router-dom";
import pdfFile from '../resource/Vartika_Agarwal_Resume_PDF.pdf';
import { useState } from 'react';


const Header = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="header-container flex p-1 m-1 justify-between text-xl">
            <div className="flex text-xl">
                <span className="px-1">🟡</span>
                <span className="px-1 font-bold"><Link to={"/"}>Vartika Agarwal</Link></span>
                <span className="px-1">Sr. FullStack Developer</span>
            </div>
            <div className="lg:flex">
                {/* <span className="px-1"><a href={pdfFile} download="VartikaAgarwal_Resume.pdf"> Resume </a></span> */}
                <div>
                <button id="dropdownDefaultButton" onClick={()=> { console.log(isOpen);setIsOpen(!isOpen)}} data-dropdown-trigger="hover" >Resume</button>
                {isOpen && (<div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href={pdfFile} download="VartikaAgarwal_Resume.pdf" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"> Download Resume </a>
                    </li>
                    <li>
                        <a href={pdfFile} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" target="_blank">Save Resume</a>
                    </li>
                    </ul>
                </div>)
                }
                </div>
                <span className="px-1">|</span>
                <span className="px-1"><Link to={"/contact"}>Contact</Link></span>
            </div>
        </div>
    )
}
export default Header;