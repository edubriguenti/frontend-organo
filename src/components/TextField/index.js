import './TextField.css'

const TextField = (props) => {
    console.log(props);
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input placeholder={`${props.placeholder}...`}/>
        </div>
    )
}

export default TextField