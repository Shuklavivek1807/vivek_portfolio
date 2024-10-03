import "./Button.scss"

interface text {
    heading: string
}
const Button: React.FC<text> =({heading})=>{
    return(
        <>
        <div className="heading-container">
            <button className="heading-button">{heading}</button>
        </div>
        
        </>
    )
}

export default Button;