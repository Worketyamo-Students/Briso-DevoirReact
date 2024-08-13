interface spanProp{
    value : string
}
// component span
function Span(prop:spanProp){
    return(
        <span className="text-primary_color">{prop.value}</span>
    )
}

export default Span