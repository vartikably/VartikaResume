import { companyImage1, companyImage2 } from "../Utils/Constant";
const WorkExperience = ()=>{
    return(
        <div className="workexperience-container">
            <div className="flex flex-col">
                <span className="text-3xl font-bold underline decoration-8 m-2">Work Experience</span>
                <p className="text-justify px-24 py-3">Throughout my career, I have had the opportunity to gain valuable work experience in BFSI domain. From my first entry-level position to my current role, I have honed my skills and developed a strong work ethic. I have had the privilege of working with diverse teams and collaborating on numerous projects, which has enhanced my ability to adapt to different work environments. Through these experiences, I have cultivated excellent communication and problem-solving skills, allowing me to effectively contribute to team objectives and meet deadlines. Overall, my work experience has provided me with a solid foundation and has prepared me for future challenges in my professional journey.</p>
                <div className="flex m-4 justify-center gap-10">
                <div className="flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img src={companyImage1} className="size-20 align-middle" alt="Birlasoft Ltd"/>
                    <div className="text-justify px-8 py-2 flex flex-col">
                    <span className="text-xl font-bold">Birlasoft Ltd.</span>
                    <span className="text-sm">September 2022 - Present</span>
                    I work in an agile team on a key enterprise project for a major US bank in the BFSI domain, focusing on creating secure, highly-available software using Java, Spring Boot, and CI/CD pipelines.Contributed to code modularity, efficiency, and scalability while supporting the migration to React and Micro-frontend. I also implement improvements to enhance customer experience and satisfaction, showcasing a commitment to high-quality development practices.
                    </div>
                </div>
                <div className="flex flex-col px-4 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                    <img src={companyImage2} className="size-20 align-middle" alt="Birlasoft Ltd"/>
                    <div className="text-justify px-8 py-2 flex flex-col">
                    <span className="text-xl font-bold">Tata Consultancy Services</span>
                    <span className="text-sm">June 2019 - August 2022</span>
                    Contributed to developing and enhancing high-end solutions for corporate actions in TCS products for banking clients. Enhanced TCS Bancs with Java to ensure scalability and efficiency. Managed version control with Git, automated software installations with shell scripting, and created a test monitoring system using Appium and Python, along with a monitoring dashboard using JavaScript and AngularJS.
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default WorkExperience;