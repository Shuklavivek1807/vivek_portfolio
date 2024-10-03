import Button from "../../molecules/Button";
import Icon from "../../molecules/Icon";
import HTML5 from "../../assests/html5_icon.svg"
import CSS3 from "../../assests/css3_icon.svg"
import SASS from "../../assests/sass_icon.svg"
import JAVASCRIPT from "../../assests/js_icon.svg"
import REACT from "../../assests/react_icon.svg"
import ANGULAR from "../../assests/angular-icon.svg"
import BOOTSTRAP from "../../assests/bootstrap.svg"
import GIT from "../../assests/git_icon.svg"
import FIGMA from "../../assests/figma.svg"
import TYPESCRIPT from "../../assests/ts_icon.svg"



import "./Skills.scss"

const Skills: React.FC =()=>{

    const icons1 =[
        {
            "heading" : "HTML5",
            "icon": HTML5
        },
        {
            "heading" : "CSS3",
            "icon": CSS3
        },
        {
            "heading" : "SASS",
            "icon": SASS
        },
        {
            "heading" : "JAVASCRIPT",
            "icon": JAVASCRIPT
        },
        {
            "heading" : "REACT",
            "icon": REACT
        },
    ]
    const icons2 =[
        {
            "heading" : "ANGULAR",
            "icon": ANGULAR
        },
        {
            "heading" : "BOOTSTRAP",
            "icon": BOOTSTRAP
        },
        {
            "heading" : "GIT",
            "icon": GIT
        },
        {
            "heading" : "FIGMA",
            "icon": FIGMA
        },
        {
            "heading" : "TYPESCRIPT",
            "icon": TYPESCRIPT
        },
    ]
    return(
        <div className="container-skill">
        <Button heading={"SKILLS"} />
        <div className="mobile-icon-continer">
        <div className="icon-container">
            {icons1?.map((item,index)=>(
                 <Icon key={index} path={item.icon} heading={item.heading}/>
            ))}
        </div>
        <div className="icon-container">
            {icons2?.map((item,index)=>(
                 <Icon key={index} path={item.icon} heading={item.heading}/>
            ))}
        </div>
        </div>
        </div>
    )
}
export default Skills;