interface Link{
    href:string,
    value : string
}
function Link({href,value}:Link){
    return(
        <a href={href}><li>{value}</li></a>
    )
}

export default Link