const ImageComponent = props =>{ 
    return ( 
    <>
    <h1>{props.title}
    </h1>
    <p>{props.paragraph}
    </p>
    <img src={props.immagine} alt={props.title} style={props.style}/>
    </>
    )
};
export default ImageComponent