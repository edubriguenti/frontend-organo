import './DropDown.css'

const DropDown = (props) => {
    return (
        <div className='drop-down'>
            <label>{props.label}</label>
            <select required={props.required} value={props.valor} onChange={event => props.aoAlterar(event.target.value)}>
                <option value=""></option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div> 
    )
}

export default DropDown