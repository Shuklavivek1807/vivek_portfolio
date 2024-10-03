import Button from "../../molecules/Button";
import "./AboutMe.scss"
import separator from "../../assests/separatorBlack.svg"
import design from "../../assests/design.svg"
import development from "../../assests/development.svg"
import maintainance from "../../assests/maintenance.svg"


const AboutMe:React.FC =()=>{
    const para = "I am Vivek kumar, a Web Developer. I am a good learner and always eager to learn new technologies. Recently started to work on Javascript. Also, Coding is my Passion."
    const aboutSection = [
        {
            "icon" : design,
            "heading" : "DESIGN",
            "paragraph" : "I can design the website based on your needs and suggestions. I can also create it by connsulting with you during work."
        },
        {
            "icon" : development,
            "heading" : "DEVELOPMENT",
            "paragraph" : "Based on a project created by me or another one, sent by you. I can program the wesite to be fully functional and responsive."
        },
        {
            "icon" : maintainance,
            "heading": "MAINTENANCE",
            "paragraph" : "In case of any problems or the need for changes. I can introduce new functionalities and solutions."
        }
    ]
    return(
        <div className="container">
               <Button heading={"ABOUT ME"}/>
               <div className="center-align">
                       <p style={{padding:"0rem 1rem"}}>{para}</p>
               </div>
               <div className="center-align" style={{padding:"2rem 0rem"}}>
               <img src={separator}/>
               </div>
               <div className="center-align card-column">
                {aboutSection?.map((item,index)=>(
                     <div key={index} className="card">
                    <img className="card-image" src={item.icon}/>
                    <h3>{item.heading}</h3>
                    <p>{item.paragraph}</p>
                </div>
                ))}
               
               </div>
        </div>
    )
}

export default AboutMe;