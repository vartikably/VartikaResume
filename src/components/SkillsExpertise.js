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
            <span className="text-3xl font-bold underline decoration-8 m-2">My Skills</span>
            <span className="text-xl font-bold m-2">Programming Languages</span>
            <div className="programming-language-container flex flex-row justify-center m-2">
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={java} className='size-8 mx-8 rounded-md' alt="Java" /> Java
                </div>
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={js} className='size-8 mx-8 rounded-md' alt="JavaScript" />JavaScript
                </div>
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={python} className='size-8 mx-8' alt="Python" />Python
                </div>
            </div>
            <span className="text-xl font-bold m-2">Front-End</span>
            <div className="programming-language-container flex flex-row justify-center m-2">
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={htmlpng} className='size-8 mx-8 rounded-md' alt="HTML5" /> HTMl 5
                </div>
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={social} className='size-8 mx-8' alt="CSS" />CSS
                </div>
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={reactImage} className='size-8 mx-8 rounded-md' alt="React Library" />React
                </div>
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={tailWindImage} className='size-8 mx-8 rounded-md' alt="Tailwind css" />Tailwind
                </div>
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={bootStrapLogo} className='size-8 mx-8 rounded-md' alt="Tailwind css" />BootStrap
                </div>
            </div>
            <span className="text-xl font-bold m-2">Back-End & Databases</span>
            <div className="programming-language-container flex flex-row justify-center m-2">
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={springBootLogo} className='size-8 mx-8 rounded-md' alt="HTML5" /> SpringBoot
                </div>
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={sqliteLogo} className='size-8 mx-8' alt="CSS" />SQLite
                </div>
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={programing} className='size-8 mx-8 rounded-md' alt="React Library" />MySQL
                </div>
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={oracleSQLLogo} className='size-8 mx-8 rounded-md' alt="Tailwind css" />Oracle SQL
                </div>
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={restApiLogo} className='size-8 mx-8 rounded-md' alt="Tailwind css" />Rest API
                </div>
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={GraphQLLogo} className='size-8 mx-8 rounded-md' alt="Tailwind css" />GraphQL
                </div>
            </div>
            <span className="text-xl font-bold m-2">Tools & Methodologies</span>
            <div className="programming-language-container flex flex-row justify-center m-2">
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={git} className='size-8 mx-8 rounded-md' alt="HTML5" /> Git
                </div>
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={bitbucket} className='size-8 mx-8' alt="CSS" />BitBucket
                </div>
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={JenkinsLogo} className='size-8 mx-8 rounded-md' alt="React Library" />Jenkins
                </div>
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={cloudbeesUrl} className='size-8 mx-8 rounded-md' alt="Tailwind css" />CloudBees
                </div>
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={jira} className='size-8 mx-8 rounded-md' alt="Tailwind css" />Jira
                </div>
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={splunkLogo} className='size-8 mx-8 rounded-md' alt="Tailwind css" />Splunk
                </div>
                <div className="border-solid border-2 rounded-md py-2 mx-2">
                    <img src={agile} className='size-8 mx-8 rounded-md' alt="Tailwind css" />Agile
                </div>
            </div>
        </div>
    )
}
export default SkillsExpertise;