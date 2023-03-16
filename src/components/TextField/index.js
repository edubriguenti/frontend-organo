import './TextField.css'

const TextField = (props) => {

    const onTyping = (event) => {
        props.aoAlterar(event.target.value)
    }
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.valor} onChange={onTyping} required={props.required} placeholder={`${props.placeholder}...`}/>
        </div>
    )
}

export default TextField