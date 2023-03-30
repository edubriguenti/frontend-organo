import './Field.css'

const Field = ({type = 'text', label, placeholder, valor, aoAlterar, required = false}) => {

    const onTyping = (event) => {
        aoAlterar(event.target.value)
    }
    return (
        <div className={`field field-${type}`}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={onTyping} 
                required={required} 
                placeholder={placeholder}
            />
        </div>
    )
}

export default Field