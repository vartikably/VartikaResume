import java from '../resource/java.png';
import js from '../resource/js.png';
import python from '../resource/python.png';
import social from '../resource/social.png'
import htmlpng from '../resource/htmlpng.png';
import programing from '../resource/programing.png';
import agile from '../resource/agile.png';
import bitbucket from '../resource/bitbucket.png';
import git from '../resource/git.png';
import jira from '../resource/jira.png';
import { bootStrapLogo, cloudbeesUrl, GraphQLLogo, JenkinsLogo, oracleSQLLogo, reactImage, restApiLogo, splunkLogo, springBootLogo, sqliteLogo, tailWindImage } from '../Utils/Constant';
const SkillsExpertise = ()=>{
    return(
        <div className="skills-container  flex flex-col">
            <span className="md:text-3xl text-xl font-bold underline decoration-8 m-2 ">My Skills</span>
            <span className="md:text-xl text-m font-bold m-2">Programming Languages</span>
            <div className="programming-language-container flex flex-row flex-wrap justify-center m-2 text-sm md:text-lg">
                <div className="border-solid border-2 rounded-md md:p-2 py-2 m-2 md:my-0">
                    <img src={java} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="Java" /> Java
                </div>
                <div className="border-solid border-2 rounded-md md:p-2 py-2 m-2 md:my-0">
                    <img src={js} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="JavaScript" />JavaScript
                </div>
                <div className="border-solid border-2 rounded-md md:p-2 py-2 m-2 md:my-0">
                    <img src={python} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="Python" />Python
                </div>
            </div>
            <span className="md:text-xl text-m font-bold m-2">Front-End</span>
            <div className="programming-language-container flex flex-row flex-wrap justify-center m-2 text-sm md:text-lg">
                <div className="border-solid border-2 rounded-md p-2 m-2 md:my-0">
                    <img src={htmlpng} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="HTML5" /> HTML 5
                </div>
                <div className="border-solid border-2 rounded-md p-2 m-2 md:my-0">
                    <img src={social} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="CSS" />CSS
                </div>
                <div className="border-solid border-2 rounded-md md:p-2 py-2 m-2 md:my-0">
                    <img src={reactImage} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="React Library" />React
                </div>
                <div className="border-solid border-2 rounded-md md:p-2 py-2 m-2 md:my-0">
                    <img src={tailWindImage} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="Tailwind css" />Tailwind
                </div>
                <div className="border-solid border-2 rounded-md py-2 m-2 items-center md:my-0">
                    <img src={bootStrapLogo} className="md:size-8 size-6 md:mx-8 mx-2 rounded-md" alt="Tailwind css" />BootStrap
                </div>
            </div>
            <span className="md:text-xl text-m font-bold m-2">Back-End & Databases</span>
            <div className="programming-language-container flex flex-row justify-center m-2 text-sm md:text-lg flex-wrap">
                <div className="border-solid border-2 rounded-md md:p-2 py-2 m-2 md:my-0">
                    <img src={springBootLogo} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="HTML5" /> SpringBoot
                </div>
                <div className="border-solid border-2 rounded-md md:p-2 py-2 m-2 md:my-0">
                    <img src={sqliteLogo} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="CSS" />SQLite
                </div>
                <div className="border-solid border-2 rounded-md md:p-2 py-2 m-2 md:my-0">
                    <img src={programing} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="React Library" />MySQL
                </div>
                <div className="border-solid border-2 rounded-md md:p-2 py-2 m-2 md:my-0">
                    <img src={oracleSQLLogo} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="Tailwind css" />Oracle SQL
                </div>
                <div className="border-solid border-2 rounded-md md:p-2 py-2 m-2 md:my-0">
                    <img src={restApiLogo} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="Tailwind css" />Rest API
                </div>
                <div className="border-solid border-2 rounded-md md:p-2 py-2 m-2 md:my-0">
                    <img src={GraphQLLogo} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="Tailwind css" />GraphQL
                </div>
            </div>
            <span className="text-xl font-bold m-2">Tools & Methodologies</span>
            <div className="programming-language-container flex flex-row justify-center m-2 text-sm md:text-lg flex-wrap">
                <div className="border-solid border-2 rounded-md md:p-2 py-2 m-2 md:my-0">
                    <img src={git} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="HTML5" /> Git
                </div>
                <div className="border-solid border-2 rounded-md md:p-2 py-2 m-2 md:my-0">
                    <img src={bitbucket} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="CSS" />BitBucket
                </div>
                <div className="border-solid border-2 rounded-md md:p-2 py-2 m-2 md:my-0">
                    <img src={JenkinsLogo} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="React Library" />Jenkins
                </div>
                <div className="border-solid border-2 rounded-md md:p-2 py-2 m-2 md:my-0">
                    <img src={cloudbeesUrl} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="Tailwind css" />CloudBees
                </div>
                <div className="border-solid border-2 rounded-md md:p-2 py-2 m-2 md:my-0">
                    <img src={jira} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="Tailwind css" />Jira
                </div>
                <div className="border-solid border-2 rounded-md md:p-2 py-2 m-2 md:my-0">
                    <img src={splunkLogo} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="Tailwind css" />Splunk
                </div>
                <div className="border-solid border-2 rounded-md md:p-2 py-2 md:my-0 m-2">
                    <img src={agile} className='md:size-8 size-6 md:mx-8 mx-2 rounded-md' alt="Tailwind css" />Agile
                </div>
            </div>
        </div>
    )
}
export default SkillsExpertise;