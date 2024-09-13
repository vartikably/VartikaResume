import { Link } from 'react-router-dom';
import Vartika from '../Vartika.jpg';
import { aboutMeContent, personName } from '../Utils/Constant';
const Body = ()=>{
    return(
        <div className="body-container md:flex lg:flex justify-center px-4 items-center md:my-28 my-10">
            <div className="img-container px-17 md:px-0">
                <img src={Vartika} alt='Vartika Agarwal' className='rounded-full w-56 mx-24 md:gap-10'/>
            </div>
            <div className="details-container flex-grow flex-col text-left">
                <h1 className='text-4xl font-bold hover:animate-bounce'>Hello 👋</h1>
                <h3 className='font-bold text-2xl py-3'>I 'm {personName}</h3>
                <p className='justify-items-end max-w-prose'>{aboutMeContent}</p>
                <div className="buttons my-4">
                    <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">
                        <Link to={"/skills"}>My Skills</Link>
                    </button>
                    <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
                        <Link to={"/workexperience"}>Work Experience</Link>
                    </button>
                    <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-2 md:px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Education</button>
                </div>
            </div>
        </div> 
    )
}
export default Body;