import { companyImage1, companyImage2 } from "../Utils/Constant";

const Resume = ()=>{
    return(
        <div className="resume-container font-serif p-4">
            <span className="text-3xl">Work Experience</span>
            <div className="flex flex-row justify-end mt-5">
                <div className="basis-1/2 flex flex-row align-middle">
                    <img className="size-4/12" src={companyImage1} altName="Birlasoft Ltd."/>
                    <div className="flex flex-col align-middle">
                        <span>Full-time</span>
                        <span>Sep 2022 - Present</span>
                        <span>Present</span>
                        <span>Noida, Uttar Pradesh, India</span>
                    </div>
                </div>
                <div className="basis-1/2 flex flex-col text-left">
                    <span className="text-lg font-bold">Senior Software Developer</span>
                    <p>I work in an agile team on a key enterprise project for a major US bank in the BFSI domain, focusing on creating secure, highly-available software using Java, Spring Boot, and CI/CD pipelines.Contributed to code modularity, efficiency, and scalability while supporting the migration to React and Micro-frontend. I also implement improvements to enhance customer experience and satisfaction, showcasing a commitment to high-quality development practices.</p>
                </div>
            </div>
            <div className="flex flex-row justify-end mt-3">
                <div className="basis-1/2 flex align-middle">
                    <img className="size-6/12" src={companyImage2} altName="Tata Consultancy Services"/>
                    <div className="flex flex-col">
                    <span>Full-time</span>
                    <span>June 2019 - Sep 2022</span>
                    <span>3 years 3 months</span>
                    <span>Gurugram, Haryana, India</span>
                    </div>
                </div>
                <div className="basis-1/2 flex flex-col text-left">
                    <span className="text-lg font-bold">System Engineer</span>
                    <p>Contributed to developing and enhancing high-end solutions for corporate actions in TCS products for banking clients. Enhanced TCS Bancs with Java to ensure scalability and efficiency. Managed version control with Git, automated software installations with shell scripting, and created a test monitoring system using Appium and Python, along with a monitoring dashboard using JavaScript and AngularJS.</p>
                </div>
            </div>            
        </div>
    )
}
export default Resume;
