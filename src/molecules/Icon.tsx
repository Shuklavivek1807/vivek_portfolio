import "./Icon.scss"


interface Icons {
    path: string
    heading: string
}
const Icon: React.FC<Icons> = ({path,heading}) =>{
 
    return(
        <div className="icon-card">
        <img className="image-icon" src={path}/>
        <p>{heading}</p>
        </div>
    )
}

export default Icon;
