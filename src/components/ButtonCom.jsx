const ButtonCom = props => { 
    return (
    <>
    <div>
    <label htmlFor={props.id} style={props.style2}>{props.labelText}</label>
    </div>
    <input type={props.type} placeholder={props.placeholder} id={props.id} style={props.style3}/>
    <button type={props.buttype} style={props.style}>{props.buttonText}</button>
   </>
    )
};
export default ButtonCom