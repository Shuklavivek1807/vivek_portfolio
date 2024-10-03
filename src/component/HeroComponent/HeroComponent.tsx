import "./Herocomponent.scss"
import heroBanner from "../../assests/rectangle.svg"
import heroImage from "../../assests/profile.png"
import mobileRectangle from "../../assests/rectangle_mobile.png"
import linkdin from "../../assests/linkdin.svg"
import portfolio from "../../assests/portfolio.svg"
import git from "../../assests/git.svg"


const HeroComponent:React.FC =()=>{

    const social = [
        {
            "src": portfolio,
            "url": "https://shuklavivek1807.github.io/vivekkumar.github.io/"
        },
        {
            "src": git,
            "url": "https://github.com/Shuklavivek1807"
        },
        {
            "src": linkdin,
            "url": "https://www.linkedin.com/in/vivek-kumar-764175137/"
        }
    ]
    return(
        <div className="hero-container">
            <div className="desktop-image-container">
               <img className="heroBanner" src={heroBanner} /> 
               <img className="heroImage" src={heroImage} /> 
            </div>
            <div className="mobile-image-container">
               <img className="heroImage" src={heroImage} /> 
               <img className="mobileHeroBanner" src={mobileRectangle} /> 
            </div>

             <div className="hero-para">
                <p className="para1">Hi, I am</p>
                <p className="para2">Vivek Kumar</p>
                <p className="para3">Front-end Developer / AEM Developer</p>

                <div className="mobile-social-icon">
                    {social?.map((item,index)=>(
                        <button className="social-button" key={index}><a href={item.url}><img className="social-icon" src={item.src} /></a></button>
                    ))}
             </div>
            </div>
            </div>
    )
}

export default HeroComponent;