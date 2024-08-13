interface Link{
    href:string,
    value : string
}
//component link using interface link
function Link({href,value}:Link){
    return(
        <a href={href}><li className="text-nav_color hover:underline hover:text-primary_color">{value}</li></a>
    )
}

export default Link